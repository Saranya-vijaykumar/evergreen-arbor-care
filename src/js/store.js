// ArborPro Operations - Real-time Data Store & State Management

const STORAGE_KEY = 'arborpro_work_orders_v1';

const INITIAL_ORDERS = [
  {
    id: "WO-1042",
    client: "Holloway Estate",
    location: "742 Evergreen Terrace",
    service: "Hazard Tree Removal",
    crew: "Crew Alpha (Lead: J. Miller)",
    status: "In Progress",
    priority: "Emergency",
    amount: 1450,
    date: "Today, 08:30 AM",
    contact: "(555) 392-1102",
    notes: "80ft leaning Douglas fir threatening garage structure. Rigging line set."
  },
  {
    id: "WO-1041",
    client: "Pinecrest Botanical",
    location: "128 Woodland Parkway",
    service: "Crown Pruning & Thinning",
    crew: "Crew Bravo (Lead: S. Vance)",
    status: "Scheduled",
    priority: "Medium",
    amount: 850,
    date: "Today, 10:15 AM",
    contact: "(555) 781-9924",
    notes: "Canopy aeration and deadwood removal for three mature white oaks."
  },
  {
    id: "WO-1040",
    client: "Oakridge Municipal Park",
    location: "Sector 4, North Pathway",
    service: "Stump Grinding",
    crew: "Crew Delta (Lead: M. Ross)",
    status: "Pending Review",
    priority: "Low",
    amount: 420,
    date: "Yesterday",
    contact: "(555) 441-2093",
    notes: "Three 24-inch diameter pine stumps following municipal trail clearing."
  },
  {
    id: "WO-1039",
    client: "Harrison Residence",
    location: "312 Elmwood Avenue",
    service: "Emergency Storm Cleanup",
    crew: "Crew Alpha (Lead: J. Miller)",
    status: "Completed",
    priority: "Emergency",
    amount: 2100,
    date: "Oct 14, 2026",
    contact: "(555) 890-3411",
    notes: "Fallen cedar blocking driveway removed and chipped on-site."
  }
];

export const ArborStore = {
  getOrders() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    // Seed initial orders if empty
    this.saveOrders(INITIAL_ORDERS);
    return INITIAL_ORDERS;
  },

  saveOrders(orders) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
      window.dispatchEvent(new CustomEvent('arborpro:order-changed', { detail: { orders } }));
    } catch (e) {
      console.error('Could not save to localStorage', e);
    }
  },

  addOrder(orderData) {
    const orders = this.getOrders();
    const nextNum = orders.reduce((max, o) => {
      const num = parseInt(o.id.replace('WO-', ''), 10);
      return !isNaN(num) && num > max ? num : max;
    }, 1042) + 1;

    const newOrder = {
      id: `WO-${nextNum}`,
      client: orderData.client || 'Prospective Client',
      location: orderData.location || 'Location Pending',
      service: orderData.service || 'Tree Care Consultation',
      crew: orderData.crew || 'Unassigned (Standby)',
      status: orderData.status || 'Pending Review',
      priority: orderData.priority || 'Medium',
      amount: orderData.amount || 350,
      date: 'Just now',
      contact: orderData.contact || orderData.email || 'Contact on file',
      notes: orderData.notes || 'Submitted via ArborPro online portal'
    };

    orders.unshift(newOrder);
    this.saveOrders(orders);
    return newOrder;
  },

  updateStatus(id, newStatus) {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === id);
    if (order) {
      order.status = newStatus;
      if (newStatus === 'In Progress' && order.crew.includes('Unassigned')) {
        order.crew = 'Crew Alpha (Lead: J. Miller)';
      }
      this.saveOrders(orders);
    }
    return order;
  },

  assignCrew(id, crewName) {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === id);
    if (order) {
      order.crew = crewName;
      if (order.status === 'Pending Review') {
        order.status = 'Scheduled';
      }
      this.saveOrders(orders);
    }
    return order;
  },

  deleteOrder(id) {
    let orders = this.getOrders();
    orders = orders.filter(o => o.id !== id);
    this.saveOrders(orders);
  },

  getMetrics() {
    const orders = this.getOrders();
    const activeOrders = orders.filter(o => o.status !== 'Completed').length;
    const pendingAssessments = orders.filter(o => o.status === 'Pending Review').length;
    const completedOrders = orders.filter(o => o.status === 'Completed').length;
    const calculatedRevenue = orders.reduce((acc, o) => acc + (o.amount || 0), 125000);
    const emergencyCount = orders.filter(o => o.priority === 'Emergency' && o.status !== 'Completed').length;

    return {
      activeOrders: activeOrders || 38,
      pendingAssessments: pendingAssessments || 14,
      completedOrders,
      emergencyCount,
      monthlyRevenue: calculatedRevenue.toLocaleString(),
      activeCrews: '8 / 10'
    };
  },

  subscribe(callback) {
    const handleUpdate = () => callback(this.getOrders(), this.getMetrics());
    window.addEventListener('arborpro:order-changed', handleUpdate);
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) {
        handleUpdate();
      }
    });
    return () => {
      window.removeEventListener('arborpro:order-changed', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }
};

// Make ArborStore available globally as well
if (typeof window !== 'undefined') {
  window.ArborStore = ArborStore;
}
