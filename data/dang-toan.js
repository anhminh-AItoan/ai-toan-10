const DANG_TOAN = [
  {
    id: "c1-menh-de",
    ten: "Mệnh đề - Phủ định mệnh đề",
    chuong: 1,
    mucDo: "Cơ bản",
    tuKhoa: ["mệnh đề", "phủ định", "đúng sai", "tính đúng sai", "xét tính đúng sai"],
    kienThuc: ["menh-de-tap-hop"],
    congThuc: ["¬P là phủ định của P", "P ⇒ Q", "P ⇔ Q"],
    phuongPhap: [
      "Đọc kỹ câu khẳng định.",
      "Xác định đó có phải mệnh đề (đúng hoặc sai rõ ràng).",
      "Nếu cần phủ định: thêm 'không' hoặc 'không phải' trước vị ngữ."
    ],
    loiThuongGap: [
      "Nhầm câu hỏi, câu cảm thán là mệnh đề.",
      "Phủ định sai cấu trúc câu."
    ],
    viDu: "P: '5 là số nguyên tố'. Phủ định: '5 không là số nguyên tố'."
  },
  {
    id: "c1-tap-hop",
    ten: "Tập hợp - Giao, hợp, hiệu",
    chuong: 1,
    mucDo: "Cơ bản",
    tuKhoa: ["tập hợp", "giao", "hợp", "hiệu", "phần bù", "A ∩ B", "A ∪ B", "∈", "⊂"],
    kienThuc: ["menh-de-tap-hop"],
    congThuc: [
      "A ∩ B = {x | x ∈ A và x ∈ B}",
      "A ∪ B = {x | x ∈ A hoặc x ∈ B}",
      "A \\ B = {x | x ∈ A và x ∉ B}"
    ],
    phuongPhap: [
      "Xác định phần tử của mỗi tập hợp.",
      "Giao: lấy phần tử chung.",
      "Hợp: gộp tất cả phần tử (không trùng).",
      "Hiệu A\\B: lấy phần tử của A mà không thuộc B."
    ],
    loiThuongGap: [
      "Lẫn giữa giao và hợp.",
      "Quên loại phần tử trùng khi lấy hợp."
    ],
    viDu: "A = {1,2,3}, B = {2,3,4}. A∩B = {2,3}; A∪B = {1,2,3,4}; A\\B = {1}."
  },
  {
    id: "c2-bpt-bac-nhat",
    ten: "Bất phương trình bậc nhất một ẩn",
    chuong: 2,
    mucDo: "Cơ bản",
    tuKhoa: ["bất phương trình", "bpt", "bậc nhất", "giải bất phương trình"],
    kienThuc: ["bat-phuong-trinh"],
    congThuc: [
      "ax + b > 0 ⇔ ax > -b",
      "Nếu a > 0: x > -b/a",
      "Nếu a < 0: x < -b/a"
    ],
    phuongPhap: [
      "Chuyển hằng số sang một vế, ẩn sang một vế.",
      "Chia hai vế cho hệ số của x (chú ý đổi chiều nếu hệ số âm).",
      "Kết luận tập nghiệm."
    ],
    loiThuongGap: [
      "Quên đổi chiều khi chia cho số âm.",
      "Nhầm dấu khi chuyển vế."
    ],
    viDu: "2x + 3 > 5 ⇔ 2x > 2 ⇔ x > 1."
  },
  {
    id: "c2-bpt-gia-tri-tuyet-doi",
    ten: "Bất phương trình chứa giá trị tuyệt đối",
    chuong: 2,
    mucDo: "Cơ bản",
    tuKhoa: ["|", "giá trị tuyệt đối", "trị tuyệt đối", "abs", "|x", "bpt chứa dấu giá trị tuyệt đối"],
    kienThuc: ["bat-phuong-trinh"],
    congThuc: [
      "|A| < m ⇔ -m < A < m (m > 0)",
      "|A| > m ⇔ A < -m hoặc A > m (m > 0)",
      "|A| ≤ m ⇔ -m ≤ A ≤ m",
      "|A| ≥ m ⇔ A ≤ -m hoặc A ≥ m",
      "|A| = |B| ⇔ A = B hoặc A = -B"
    ],
    phuongPhap: [
      "Xác định dạng: |A| so sánh với m.",
      "Nếu dạng |A| < m hoặc ≤ m: kẹp giữa -m và m.",
      "Nếu dạng |A| > m hoặc ≥ m: tách thành hai trường hợp.",
      "Giải từng bất phương trình con, kết hợp nghiệm."
    ],
    loiThuongGap: [
      "Quên chia hai trường hợp khi |A| > m.",
      "Nhầm |A| < m thành A < m.",
      "Không kiểm tra điều kiện m > 0."
    ],
    viDu: "|x - 1| > 2 ⇔ x - 1 < -2 hoặc x - 1 > 2 ⇔ x < -1 hoặc x > 3."
  },
  {
    id: "c2-he-bpt",
    ten: "Hệ bất phương trình bậc nhất",
    chuong: 2,
    mucDo: "Trung bình",
    tuKhoa: ["hệ bất phương trình", "hệ bpt", "hệ bpt bậc nhất"],
    kienThuc: ["bat-phuong-trinh"],
    congThuc: ["Nghiệm của hệ là giao các tập nghiệm"],
    phuongPhap: [
      "Giải từng bất phương trình trong hệ.",
      "Biểu diễn trên trục số.",
      "Lấy phần giao của các tập nghiệm."
    ],
    loiThuongGap: ["Lấy hợp thay vì giao.", "Vẽ trục số sai chiều."],
    viDu: "Hệ: x - 1 > 0 và 2x < 6 ⇔ x > 1 và x < 3 ⇔ 1 < x < 3."
  },
  {
    id: "c3-dinh-ly-cosin",
    ten: "Định lý cosin - Tính cạnh, góc tam giác",
    chuong: 3,
    mucDo: "Cơ bản",
    tuKhoa: ["tam giác", "định lý cosin", "cosin", "tính cạnh", "tính góc"],
    kienThuc: ["he-thuc-luong"],
    congThuc: [
      "a² = b² + c² - 2bc·cosA",
      "b² = a² + c² - 2ac·cosB",
      "c² = a² + b² - 2ab·cosC",
      "cosA = (b² + c² - a²)/(2bc)"
    ],
    phuongPhap: [
      "Xác định đại lượng đã biết và cần tìm.",
      "Nếu biết 2 cạnh + góc xen giữa → tìm cạnh còn lại bằng định lý cosin.",
      "Nếu biết 3 cạnh → tìm góc bằng công thức cosin đảo."
    ],
    loiThuongGap: [
      "Nhầm cạnh đối diện với góc.",
      "Dùng sai công thức (đổi vị trí bình phương)."
    ],
    viDu: "Cho a = 3, b = 4, C = 60°. Tính c: c² = 9 + 16 - 2·3·4·cos60° = 13 ⇒ c = √13."
  },
  {
    id: "c3-dinh-ly-sin",
    ten: "Định lý sin - Tính cạnh, góc, bán kính",
    chuong: 3,
    mucDo: "Trung bình",
    tuKhoa: ["định lý sin", "sin", "bán kính ngoại tiếp", "R"],
    kienThuc: ["he-thuc-luong"],
    congThuc: [
      "a/sinA = b/sinB = c/sinC = 2R",
      "R = a/(2sinA)"
    ],
    phuongPhap: [
      "Xác định cặp cạnh-góc đối.",
      "Áp dụng tỉ lệ a/sinA = b/sinB = ...",
      "Tính đại lượng cần tìm."
    ],
    loiThuongGap: ["Lấy sinA/a thay vì a/sinA.", "Nhầm góc đối diện."],
    viDu: "Cho a = 6, A = 30°. Tính R: R = a/(2sinA) = 6/(2·0.5) = 6."
  },
  {
    id: "c3-dien-tich-tam-giac",
    ten: "Diện tích tam giác",
    chuong: 3,
    mucDo: "Cơ bản",
    tuKhoa: ["diện tích tam giác", "tính S", "nửa chu vi"],
    kienThuc: ["he-thuc-luong"],
    congThuc: [
      "S = (1/2)ab·sinC = (1/2)bc·sinA = (1/2)ac·sinB",
      "S = abc/(4R)",
      "S = p·r với p = (a+b+c)/2",
      "S = √(p(p-a)(p-b)(p-c)) (Heron)"
    ],
    phuongPhap: [
      "Xác định dữ kiện đã cho.",
      "Chọn công thức phù hợp.",
      "Thay số và tính."
    ],
    loiThuongGap: ["Nhầm sinA và sinB.", "Quên chia 2."],
    viDu: "a = 3, b = 4, C = 60°: S = (1/2)·3·4·sin60° = 3√3."
  },
  {
    id: "c4-tong-hieu-vecto",
    ten: "Tổng, hiệu hai vectơ",
    chuong: 4,
    mucDo: "Cơ bản",
    tuKhoa: ["vectơ", "vector", "tổng hai vectơ", "hiệu hai vectơ", "quy tắc ba điểm"],
    kienThuc: ["vecto"],
    congThuc: [
      "AB→ + BC→ = AC→",
      "AB→ - AC→ = CB→",
      "AB→ + AD→ = AC→ (hình bình hành)"
    ],
    phuongPhap: [
      "Vẽ hình hoặc xác định điểm đầu, điểm cuối.",
      "Áp dụng quy tắc ba điểm hoặc hình bình hành.",
      "Rút gọn biểu thức."
    ],
    loiThuongGap: ["Nhầm chiều vectơ.", "Lẫn AB→ với BA→."],
    viDu: "AB→ + BC→ = AC→."
  },
  {
    id: "c4-tich-vo-huong",
    ten: "Tích vô hướng hai vectơ",
    chuong: 4,
    mucDo: "Trung bình",
    tuKhoa: ["tích vô hướng", "góc giữa hai vectơ", "vuông góc"],
    kienThuc: ["vecto"],
    congThuc: [
      "a→·b→ = |a→|·|b→|·cos(a→,b→)",
      "Nếu a→ = (x₁;y₁), b→ = (x₂;y₂): a→·b→ = x₁x₂ + y₁y₂",
      "a→ ⊥ b→ ⇔ a→·b→ = 0"
    ],
    phuongPhap: [
      "Xác định tọa độ hoặc độ dài + góc.",
      "Áp dụng công thức.",
      "Suy ra góc hoặc kiểm tra vuông góc."
    ],
    loiThuongGap: ["Quên cos.", "Nhầm dấu tọa độ."],
    viDu: "a→ = (1;2), b→ = (3;-1): a→·b→ = 1·3 + 2·(-1) = 1."
  },
  {
    id: "c5-khoang-cach",
    ten: "Khoảng cách từ điểm đến đường thẳng",
    chuong: 5,
    mucDo: "Trung bình",
    tuKhoa: ["khoảng cách", "đường thẳng", "d(M,Δ)"],
    kienThuc: ["toa-do-mat-phang"],
    congThuc: [
      "d(M, Δ) = |ax₀ + by₀ + c| / √(a² + b²)",
      "với M(x₀; y₀), Δ: ax + by + c = 0"
    ],
    phuongPhap: [
      "Xác định phương trình đường thẳng và tọa độ điểm.",
      "Thay vào công thức.",
      "Tính toán cẩn thận."
    ],
    loiThuongGap: ["Quên dấu giá trị tuyệt đối.", "Quên chia mẫu."],
    viDu: "M(1;2), Δ: 3x + 4y - 5 = 0: d = |3+8-5|/5 = 6/5."
  },
  {
    id: "c5-duong-tron",
    ten: "Phương trình đường tròn",
    chuong: 5,
    mucDo: "Trung bình",
    tuKhoa: ["đường tròn", "phương trình đường tròn", "tâm I", "bán kính R"],
    kienThuc: ["toa-do-mat-phang"],
    congThuc: [
      "(x - a)² + (y - b)² = R²",
      "x² + y² - 2ax - 2by + c = 0 với R² = a² + b² - c"
    ],
    phuongPhap: [
      "Xác định tâm và bán kính.",
      "Viết phương trình.",
      "Hoặc nhận dạng từ phương trình tổng quát."
    ],
    loiThuongGap: ["Nhầm dấu tâm khi khai triển.", "Quên điều kiện R > 0."],
    viDu: "Tâm I(1;2), R = 3: (x-1)² + (y-2)² = 9."
  },
  {
    id: "c6-tap-xac-dinh",
    ten: "Tìm tập xác định của hàm số",
    chuong: 6,
    mucDo: "Cơ bản",
    tuKhoa: ["tập xác định", "txđ", "tìm tập xác định", "hàm số", "f(x)"],
    kienThuc: ["ham-so"],
    congThuc: [
      "√A xác định ⇔ A ≥ 0",
      "1/A xác định ⇔ A ≠ 0",
      "1/√A xác định ⇔ A > 0"
    ],
    phuongPhap: [
      "Xác định dạng biểu thức.",
      "Đặt điều kiện có nghĩa.",
      "Giải điều kiện, kết luận."
    ],
    loiThuongGap: ["Nhầm √A với A.", "Quên mẫu khác 0."],
    viDu: "y = √(x-1) xác định ⇔ x - 1 ≥ 0 ⇔ x ≥ 1."
  },
  {
    id: "c7-parabol",
    ten: "Khảo sát hàm số bậc hai - Parabol",
    chuong: 7,
    mucDo: "Trung bình",
    tuKhoa: ["parabol", "hàm bậc hai", "đỉnh", "trục đối xứng"],
    kienThuc: ["ham-so-bac-hai"],
    congThuc: [
      "Đỉnh I(-b/2a; -Δ/4a) với Δ = b² - 4ac",
      "Trục đối xứng x = -b/2a",
      "Nghiệm: x = (-b ± √Δ)/2a"
    ],
    phuongPhap: [
      "Xác định hệ số a, b, c.",
      "Tính tọa độ đỉnh.",
      "Tìm trục đối xứng.",
      "Vẽ đồ thị hoặc lập bảng biến thiên."
    ],
    loiThuongGap: ["Nhầm dấu -b/2a.", "Tính Δ sai."],
    viDu: "y = x² - 3x + 2: đỉnh I(3/2; -1/4)."
  },
  {
    id: "c7-phuong-trinh-bac-hai",
    ten: "Phương trình bậc hai",
    chuong: 7,
    mucDo: "Cơ bản",
    tuKhoa: ["phương trình bậc hai", "pt bậc hai", "giải phương trình", "delta", "Δ", "nghiệm"],
    kienThuc: ["ham-so-bac-hai"],
    congThuc: [
      "Δ = b² - 4ac",
      "Δ > 0: x = (-b ± √Δ)/(2a)",
      "Δ = 0: x = -b/(2a)",
      "Δ < 0: vô nghiệm",
      "Vi-ét: x₁ + x₂ = -b/a, x₁x₂ = c/a"
    ],
    phuongPhap: [
      "Xác định a, b, c.",
      "Tính Δ.",
      "Xét dấu Δ, tìm nghiệm.",
      "Kết luận."
    ],
    loiThuongGap: ["Nhầm dấu.", "Quên chia 2a.", "Tính Δ sai."],
    viDu: "x² - 3x + 2 = 0: Δ = 9 - 8 = 1 ⇒ x₁ = 2, x₂ = 1."
  },
  {
    id: "c8-trung-binh-cong",
    ten: "Số trung bình cộng, trung vị, mốt",
    chuong: 8,
    mucDo: "Cơ bản",
    tuKhoa: ["trung bình cộng", "trung vị", "mốt", "số trung bình", "thống kê"],
    kienThuc: ["thong-ke"],
    congThuc: [
      "x̄ = (x₁ + ... + xₙ)/n",
      "Trung vị: giá trị giữa dãy đã sắp xếp",
      "Mốt: giá trị xuất hiện nhiều nhất"
    ],
    phuongPhap: [
      "Sắp xếp dãy số (nếu cần).",
      "Tính theo yêu cầu đề.",
      "Kết luận."
    ],
    loiThuongGap: ["Quên sắp xếp khi tìm trung vị.", "Nhầm mốt."],
    viDu: "Dãy 1,2,2,3,5: x̄ = 13/5 = 2.6; trung vị = 2; mốt = 2."
  },
  {
    id: "c9-xac-suat-co-ban",
    ten: "Xác suất của biến cố",
    chuong: 9,
    mucDo: "Cơ bản",
    tuKhoa: ["xác suất", "biến cố", "P(A)", "không gian mẫu", "gieo xúc xắc", "tung đồng xu"],
    kienThuc: ["xac-suat"],
    congThuc: [
      "P(A) = n(A)/n(Ω)",
      "P(Ā) = 1 - P(A)",
      "0 ≤ P(A) ≤ 1"
    ],
    phuongPhap: [
      "Xác định không gian mẫu Ω.",
      "Xác định biến cố A và n(A).",
      "Tính P(A) = n(A)/n(Ω)."
    ],
    loiThuongGap: ["Nhầm n(A) và n(Ω).", "Quên liệt kê đủ không gian mẫu."],
    viDu: "Gieo 1 xúc xắc, A = 'số chấm chẵn': n(Ω) = 6, n(A) = 3 ⇒ P = 1/2."
  }
];
