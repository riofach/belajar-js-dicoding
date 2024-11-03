function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const series = fibonacci(n - 1); // Rekursif: menghasilkan deret hingga elemen (n-1)
    const nextValue = series[series.length - 1] + series[series.length - 2];
    series.push(nextValue); // Tambahkan elemen berikutnya ke deret
    return series;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
