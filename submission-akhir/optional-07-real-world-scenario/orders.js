// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
const orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // total harga pesanan
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  // objek pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };

  // Menambahkan pesanan ke daftar orders
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // cari order id dan update status
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  let orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
