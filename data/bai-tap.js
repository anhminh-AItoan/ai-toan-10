const BAI_TAP = {
  "c2-bpt-gia-tri-tuyet-doi": [
    "|x - 2| < 3",
    "|2x + 1| ≥ 5",
    "|x + 3| > 1",
    "|3 - x| ≤ 4",
    "|2x - 1| < 7"
  ],
  "c2-bpt-bac-nhat": [
    "3x - 5 > 4",
    "-2x + 1 ≤ 7",
    "5x + 2 < 3x + 8",
    "4 - 3x > 10",
    "2(x - 1) ≥ 3x + 1"
  ],
  "c2-he-bpt": [
    "Hệ: x + 2 > 0 và 3x - 6 < 0",
    "Hệ: 2x - 1 ≥ 3 và x + 4 < 7",
    "Hệ: x - 1 > 0 và x + 2 < 5"
  ],
  "c3-dinh-ly-cosin": [
    "Tam giác ABC có a=5, b=6, C=60°. Tính c.",
    "Tam giác ABC có b=3, c=4, A=90°. Tính a.",
    "Tam giác ABC có a=7, b=8, c=9. Tính góc C."
  ],
  "c3-dinh-ly-sin": [
    "Cho a = 8, A = 45°. Tính R.",
    "Cho b = 10, B = 30°. Tính R.",
    "Cho c = 6, C = 60°. Tính R."
  ],
  "c3-dien-tich-tam-giac": [
    "a = 5, b = 6, C = 30°. Tính S.",
    "a = 4, b = 7, C = 60°. Tính S.",
    "Tam giác đều cạnh a. Tính diện tích."
  ],
  "c4-tich-vo-huong": [
    "a→ = (2;1), b→ = (1;3). Tính a→·b→.",
    "a→ = (1;-1), b→ = (2;2). Kiểm tra vuông góc.",
    "|a→| = 3, |b→| = 4, góc = 60°. Tính a→·b→."
  ],
  "c5-khoang-cach": [
    "M(2;1), Δ: x + 2y - 3 = 0. Tính d(M, Δ).",
    "M(0;0), Δ: 3x - 4y + 5 = 0. Tính d.",
    "M(1;-1), Δ: 2x + y - 4 = 0. Tính d."
  ],
  "c5-duong-tron": [
    "Viết phương trình đường tròn tâm I(2;-1), R = 4.",
    "Viết phương trình đường tròn tâm O(0;0), R = 5.",
    "Viết phương trình đường tròn đường kính AB với A(1;2), B(3;4)."
  ],
  "c6-tap-xac-dinh": [
    "y = √(2x - 4)",
    "y = 1/(x - 3)",
    "y = √(x + 1)/(x - 2)",
    "y = 1/√(5 - x)"
  ],
  "c7-phuong-trinh-bac-hai": [
    "x² - 5x + 6 = 0",
    "2x² - 3x - 5 = 0",
    "x² + 4x + 4 = 0",
    "x² + x + 1 = 0",
    "3x² - 2x - 1 = 0"
  ],
  "c7-parabol": [
    "y = x² + 2x - 3",
    "y = -x² + 4x - 1",
    "y = 2x² - 4x + 1"
  ],
  "c8-trung-binh-cong": [
    "Dãy: 3, 5, 7, 9, 11",
    "Dãy: 2, 4, 4, 6, 8, 10",
    "Dãy: 1, 1, 2, 3, 3, 3, 5"
  ],
  "c9-xac-suat-co-ban": [
    "Gieo 1 đồng xu. Tính xác suất mặt ngửa.",
    "Gieo 1 xúc xắc. Tính xác suất số chấm ≥ 5.",
    "Chọn ngẫu nhiên 1 số từ 1 đến 20. Tính xác suất số chia hết cho 3."
  ],
  "c1-tap-hop": [
    "A = {1,2,3,4}, B = {3,4,5,6}. Tìm A∩B, A∪B.",
    "A = {x ∈ ℕ | x < 5}, B = {x ∈ ℕ | 2 < x < 7}. Tìm A∩B."
  ],
  "c1-menh-de": [
    "Xét tính đúng sai: '7 là số nguyên tố'.",
    "Phủ định mệnh đề: 'Hà Nội là thủ đô Việt Nam'.",
    "Xét tính đúng sai: '2 + 3 = 6'."
  ]
};

function getBaiTuongTu(dangId) {
  const list = BAI_TAP[dangId] || [];
  if (list.length === 0) return [];
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
                                  }q
