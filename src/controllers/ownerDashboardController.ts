import { type Request, type Response } from "express";
import { prisma } from "../config/prisma.js";



interface Activity {
  id: string;
  date: Date;
  type: string;
  description: string;
}

function getRelativeTimeDescription(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hr ago`;
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

export async function ownerDashboardController(req: Request, res: Response) {
  try {
    const now = new Date();

    // Today

    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );

    // Week (Monday)

    const startOfWeek = new Date(startOfToday);

    const day = startOfWeek.getDay();

    const diff = day === 0 ? 6 : day - 1;

    startOfWeek.setDate(startOfWeek.getDate() - diff);

    // Month

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [
      todayRevenue,

      weekRevenue,

      monthRevenue,

      lifetimeRevenue,

      activeTickets,

      completedTickets,

      criticalTickets,

      todayRepairs,

      totalCustomers,

      totalVehicles,

      totalTechnicians,

      inventoryCount,

      inventoryItems,

      ticketStatusGroup,

      technicians,

      latestTickets,

      latestInvoices,

      latestCustomers,
    ] = await Promise.all([
      prisma.invoice.aggregate({
        _sum: {
          grandTotal: true,
        },

        where: {
          createdAt: {
            gte: startOfToday,
          },
        },
      }),

      prisma.invoice.aggregate({
        _sum: {
          grandTotal: true,
        },

        where: {
          createdAt: {
            gte: startOfWeek,
          },
        },
      }),

      prisma.invoice.aggregate({
        _sum: {
          grandTotal: true,
        },

        where: {
          createdAt: {
            gte: startOfMonth,
          },
        },
      }),

      prisma.invoice.aggregate({
        _sum: {
          grandTotal: true,
        },
      }),

      prisma.repairTicket.count({
        where: {
          status: {
            not: "DELIVERED",
          },
        },
      }),

      prisma.repairTicket.count({
        where: {
          status: "RESOLVED",
        },
      }),

      prisma.repairTicket.count({
        where: {
          priority: {
            in: ["HIGH", "URGENT"],
          },
        },
      }),

      prisma.repairTicket.count({
        where: {
          createdAt: {
            gte: startOfToday,
          },
        },
      }),

      prisma.customer.count(),

      prisma.vehicle.count(),

      prisma.technician.count(),

      prisma.inventory.count(),

      prisma.inventory.findMany({
        orderBy: {
          stockLevel: "asc",
        },
      }),

      prisma.repairTicket.groupBy({
        by: ["status"],

        _count: {
          id: true,
        },
      }),

      prisma.technician.findMany({
        include: {
          tickets: {
            where: {
              status: {
                not: "DELIVERED",
              },
            },
          },
        },
      }),

      prisma.repairTicket.findMany({
        take: 5,

        orderBy: {
          createdAt: "desc",
        },

        include: {
          customer: true,
        },
      }),

      prisma.invoice.findMany({
        take: 5,

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.customer.findMany({
        take: 5,

        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);

    const statusMap = new Map();

    ticketStatusGroup.forEach((item) => {
      statusMap.set(
        item.status,

        item._count.id,
      );
    });

    const lowStockItems = inventoryItems.filter(
      (item) => item.stockLevel <= item.lowStockAlert,
    );

    const totalInventoryValue = inventoryItems.reduce(
      (sum, item) => sum + item.stockLevel * item.retailPrice,

      0,
    );
    // ===========================
    // Technician Workload
    // ===========================

    const technicianSummary = technicians.map((tech) => {
      const activeJobs = tech.tickets.filter(
        (ticket) =>
          ticket.status !== "RESOLVED" && ticket.status !== "DELIVERED",
      ).length;

      const completedToday = tech.tickets.filter(
        (ticket) =>
          ticket.status === "RESOLVED" && ticket.updatedAt >= startOfToday,
      ).length;

      let workload: "AVAILABLE" | "BUSY" | "ON_LEAVE" = "AVAILABLE";

      if (tech.status === "ON_LEAVE") {
        workload = "ON_LEAVE";
      } else if (activeJobs >= 5) {
        workload = "BUSY";
      }

      return {
        id: tech.id,

        name: tech.fullName,

        specialization: tech.specialization,

        activeJobs,

        completedToday,

        workload,
      };
    });

    // ===========================
    // Inventory Alerts
    // ===========================

    const inventoryAlerts = lowStockItems.map((item) => {
      let severity = "LOW";

      if (item.stockLevel === 0) {
        severity = "OUT_OF_STOCK";
      } else if (item.stockLevel <= Math.floor(item.lowStockAlert / 2)) {
        severity = "CRITICAL";
      }

      return {
        id: item.id,

        partName: item.partName,

        stock: item.stockLevel,

        threshold: item.lowStockAlert,

        severity,
      };
    });

    // ===========================
    // Recent Activity Feed
    // ===========================

    const activities: Activity[] = [];

    latestTickets.forEach((ticket) => {
      activities.push({
        id: `ticket-${ticket.id}`,

        date: ticket.createdAt,

        type: "TICKET",

        description: `Repair Ticket #${ticket.id} created for ${ticket.customer.name}`,
      });
    });

    latestInvoices.forEach((invoice) => {
      activities.push({
        id: `invoice-${invoice.id}`,

        date: invoice.createdAt,

        type: "INVOICE",

        description: `Invoice ${invoice.invoiceNo} generated for ${invoice.customerName}`,
      });
    });

    latestCustomers.forEach((customer) => {
      activities.push({
        id: `customer-${customer.id}`,

        date: customer.createdAt,

        type: "CUSTOMER",

        description: `${customer.name} registered`,
      });
    });

    const recentActivity = activities

      .sort((a, b) => b.date.getTime() - a.date.getTime())

      .slice(0, 10)

      .map((item) => ({
        id: item.id,

        type: item.type,

        description: item.description,

        timestamp: getRelativeTimeDescription(item.date),
      }));

    // ===========================
    // Operations Pipeline
    // ===========================

    const operationsColumns = [
      {
        label: "NEW REPAIRS",

        count: statusMap.get("PENDING") ?? 0,
      },

      {
        label: "DIAGNOSING",

        count: statusMap.get("DIAGNOSING") ?? 0,
      },

      {
        label: "IN SERVICE",

        count: statusMap.get("IN_SERVICE") ?? 0,
      },

      {
        label: "RESOLVED",

        count: statusMap.get("RESOLVED") ?? 0,
      },

      {
        label: "DELIVERED",

        count: statusMap.get("DELIVERED") ?? 0,
      },
    ];

    // ===========================
    // Priority Cards
    // ===========================

    const actionCards = [
      {
        id: "1",

        title: "Critical Repairs",

        count: criticalTickets,

        description: "High priority repair tickets",
      },

      {
        id: "2",

        title: "Low Stock Alerts",

        count: inventoryAlerts.length,

        description: "Inventory below threshold",
      },
    ];

    // ===========================
    // AI Placeholder
    // ===========================

    const aiBriefing = {
      insight: "AI diagnostic engine will be connected in future releases.",

      metricIncrease: `${criticalTickets} critical repair cases detected.`,

      mostAffectedModel: "Not Available",

      recommendedAction:
        "Prioritize urgent battery and controller diagnostics.",
    };

    // ===========================
    // Final Response
    // ===========================

    return res.status(200).json({
      metrics: {
        todayRevenue: todayRevenue._sum.grandTotal ?? 0,

        weekRevenue: weekRevenue._sum.grandTotal ?? 0,

        monthRevenue: monthRevenue._sum.grandTotal ?? 0,

        lifetimeRevenue: lifetimeRevenue._sum.grandTotal ?? 0,
      },

      quickMetrics: {
        todayRepairs,

        activeTickets,

        completedTickets,

        criticalTickets,

        totalCustomers,

        totalVehicles,

        totalTechnicians,

        inventoryCount,

        totalInventoryValue,
      },

      actionCards,

      operationsColumns,

      technicianSummary,

      inventoryAlerts,

      recentActivity,

      aiBriefing,
    });
  } catch (error) {
    console.error(
      "Owner Dashboard Error:",

      error,
    );

    return res.status(500).json({
      success: false,

      message: "Failed to load owner dashboard.",
    });
  }
}
