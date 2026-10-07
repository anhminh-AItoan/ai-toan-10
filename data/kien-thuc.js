const KIEN_THUC = {
  "menh-de-tap-hop": {
    ten: "Mệnh đề và tập hợp",
    chuong: 1,
    lyThuyet: [
      "Mệnh đề là câu khẳng định có tính đúng hoặc sai.",
      "Phủ định của mệnh đề P ký hiệu là ¬P (hoặc P̄).",
      "Giao: A ∩ B = {x | x ∈ A và x ∈ B}",
      "Hợp: A ∪ B = {x | x ∈ A hoặc x ∈ B}",
      "Hiệu: A \\ B = {x | x ∈ A và x ∉ B}",
      "Phần bù: C_A B = A \\ B (khi B ⊂ A)"
    ],
    congThuc: [
      "A ⊂ B ⇔ ∀x (x ∈ A ⇒ x ∈ B)",
      "A = B ⇔ A ⊂ B và B ⊂ A",
      "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)"
    ]
  },
  "bat-phuong-trinh": {
    ten: "Bất phương trình và hệ bất phương trình",
    chuong: 2,
    lyThuyet: [
      "Bất phương trình bậc nhất một ẩn: ax + b > 0 (a ≠ 0).",
      "Nghiệm là khoảng, đoạn, nửa khoảng.",
      "Khi nhân/chia hai vế với số âm phải đổi chiều bất đẳng thức.",
      "|A| < m ⇔ -m < A < m (với m > 0)",
      "|A| > m ⇔ A < -m hoặc A > m (với m > 0)"
    ],
    congThuc: [
      "|A| < m ⇔ -m < A < m",
      "|A| > m ⇔ A < -m ∨ A > m",
      "|A| ≤ m ⇔ -m ≤ A ≤ m",
      "|A| ≥ m ⇔ A ≤ -m ∨ A ≥ m",
      "|A| = |B| ⇔ A = B ∨ A = -B"
    ]
  },
  "he-thuc-luong": {
    ten: "Hệ thức lượng trong tam giác",
    chuong: 3,
    lyThuyet: [
      "Định lý cosin liên hệ ba cạnh và một góc.",
      "Định lý sin liên hệ cạnh với sin góc đối.",
      "Công thức tính diện tích tam giác.",
      "Định lý cosin dùng khi biết 2 cạnh + góc xen giữa, hoặc 3 cạnh."
    ],
    congThuc: [
      "a² = b² + c² - 2bc·cosA",
      "b² = a² + c² - 2ac·cosB",
      "c² = a² + b² - 2ab·cosC",
      "a/sinA = b/sinB = c/sinC = 2R",
      "S = (1/2)ab·sinC = (1/2)bc·sinA = (1/2)ac·sinB",
      "S = abc/(4R) = p·r (p là nửa chu vi)",
      "p = (a+b+c)/2"
    ]
  },
  "vecto": {
    ten: "Vectơ",
    chuong: 4,
    lyThuyet: [
      "Vectơ là đoạn thẳng có hướng, ký hiệu AB→.",
      "Hai vectơ cùng phương ⇔ giá song song hoặc trùng.",
      "Tổng hai vectơ theo quy tắc hình bình hành hoặc quy tắc ba điểm.",
      "Tích vô hướng: a→·b→ = |a→|·|b→|·cos(a→,b→)."
    ],
    congThuc: [
      "AB→ + BC→ = AC→ (quy tắc ba điểm)",
      "a→·b→ = |a→|·|b→|·cosα",
      "|a→| = √(x² + y²) với a→ = (x; y)",
      "a→ ⊥ b→ ⇔ a→·b→ = 0",
      "Nếu a→ = (x₁; y₁), b→ = (x₂; y₂): a→·b→ = x₁x₂ + y₁y₂"
    ]
  },
  "toa-do-mat-phang": {
    ten: "Phương pháp tọa độ trong mặt phẳng",
    chuong: 5,
    lyThuyet: [
      "Trong mặt phẳng Oxy, mỗi điểm có tọa độ (x; y).",
      "Vectơ AB→ = (x_B - x_A; y_B - y_A).",
      "Phương trình đường thẳng: ax + by + c = 0 (a² + b² > 0).",
      "Đường tròn tâm I(a; b) bán kính R: (x-a)² + (y-b)² = R²."
    ],
    congThuc: [
      "AB = √((x_B-x_A)² + (y_B-y_A)²)",
      "Trung điểm M: x_M = (x_A+x_B)/2, y_M = (y_A+y_B)/2",
      "d(M, Δ) = |ax₀ + by₀ + c| / √(a² + b²)",
      "Phương trình đường tròn tâm I(a;b), R: (x-a)² + (y-b)² = R²"
    ]
  },
  "ham-so": {
    ten: "Hàm số và đồ thị",
    chuong: 6,
    lyThuyet: [
      "Hàm số y = f(x) xác định trên D.",
      "Tập xác định: các giá trị x làm biểu thức có nghĩa.",
      "Hàm số đồng biến trên (a;b) nếu ∀x₁ < x₂ ⇒ f(x₁) < f(x₂).",
      "Hàm số nghịch biến trên (a;b) nếu ∀x₁ < x₂ ⇒ f(x₁) > f(x₂)."
    ],
    congThuc: [
      "y = ax + b (a ≠ 0): hàm bậc nhất",
      "Hàm bậc nhất đồng biến khi a > 0, nghịch biến khi a < 0",
      "Tập xác định của √A: A ≥ 0",
      "Tập xác định của 1/A: A ≠ 0"
    ]
  },
  "ham-so-bac-hai": {
    ten: "Hàm số bậc hai",
    chuong: 7,
    lyThuyet: [
      "Hàm bậc hai: y = ax² + bx + c (a ≠ 0).",
      "Đồ thị là parabol có đỉnh I(-b/2a; -Δ/4a).",
      "Trục đối xứng: x = -b/2a.",
      "a > 0: bề lõm hướng lên; a < 0: bề lõm hướng xuống."
    ],
    congThuc: [
      "Đỉnh I(-b/2a; -Δ/4a) với Δ = b² - 4ac",
      "Trục đối xứng x = -b/2a",
      "Nghiệm: x = (-b ± √Δ) / 2a",
      "Hệ thức Vi-ét: x₁ + x₂ = -b/a, x₁x₂ = c/a"
    ]
  },
  "thong-ke": {
    ten: "Thống kê",
    chuong: 8,
    lyThuyet: [
      "Số trung bình cộng: tổng các giá trị chia số lượng.",
      "Trung vị: giá trị giữa khi sắp xếp.",
      "Mốt: giá trị xuất hiện nhiều nhất.",
      "Phương sai, độ lệch chuẩn đo mức phân tán."
    ],
    congThuc: [
      "x̄ = (x₁ + x₂ + ... + xₙ) / n",
      "Phương sai: s² = (1/n)Σ(xᵢ - x̄)²",
      "Độ lệch chuẩn: s = √s²"
    ]
  },
  "xac-suat": {
    ten: "Xác suất",
    chuong: 9,
    lyThuyet: [
      "Phép thử ngẫu nhiên có không gian mẫu Ω.",
      "Biến cố A là tập con của Ω.",
      "Xác suất: P(A) = n(A) / n(Ω).",
      "0 ≤ P(A) ≤ 1; P(Ω) = 1; P(∅) = 0."
    ],
    congThuc: [
      "P(A) = n(A) / n(Ω)",
      "P(Ā) = 1 - P(A)",
      "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
      "Nếu A, B xung khắc: P(A ∪ B) = P(A) + P(B)"
    ]
  }
};
