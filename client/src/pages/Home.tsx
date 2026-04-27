import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Droplet, Wind, Shield, Leaf } from "lucide-react";

/**
 * Design Philosophy: Authentic Minimalism with Warmth
 * - Sage Green primary color for health & sustainability
 * - Warm Beige accent for human connection
 * - Playfair Display for elegance, Inter for clarity
 * - Asymmetric layouts with breathing space
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary" style={{fontFamily: "'Playfair Display', serif"}}>
            프리미엄 위생팬티
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              제품 특징
            </a>
            <a href="#story" className="text-sm font-medium hover:text-primary transition-colors">
              제조사 이야기
            </a>
            <a href="#cta" className="text-sm font-medium hover:text-primary transition-colors">
              구매하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div className="order-2 md:order-1">
              <img
                src="/manus-storage/hero-product-main_5778dc7a.png"
                alt="프리미엄 여성 위생팬티 제품"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text - Right Side, Top Aligned */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                  유명 브랜드의 그 팬티,
                  <span className="text-primary"> 사실 우리가 만듭니다</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  불필요한 마케팅 비용을 뺀 '진짜 가격'으로 만나보세요
                </p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>국내 생산 100%, 엄격한 품질 테스트 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>누적 생산량 수백만 장, 검증된 기술력</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>5중 흡수 구조, 완벽한 샘 방지</span>
                </div>
              </div>

              <a
                href="https://www.amazoncare.com/goods/goods_view.php?goodsNo=1000009059"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium text-lg w-full md:w-auto"
              >
                공장 직송가로 구매하기
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text - Left */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                  더 이상 불편함과 타협하지 마세요
                </h2>
                <p className="text-lg text-muted-foreground">
                  매달 찾아오는 그 날, 찝찝함, 냄새, 샘 걱정으로 불편하셨나요? 일회용 생리대의 답답함과 환경 문제, 이제는 새로운 대안이 필요합니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Droplet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">완벽한 샘 방지</h3>
                    <p className="text-sm text-muted-foreground">
                      5중 흡수 구조로 활동 중에도 안심하고 지낼 수 있습니다
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Wind className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">뛰어난 통기성</h3>
                    <p className="text-sm text-muted-foreground">
                      습기와 열을 빠르게 배출하여 하루 종일 쾌적함 유지
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">항균 및 소취 기능</h3>
                    <p className="text-sm text-muted-foreground">
                      특수 원단으로 불쾌한 냄새 걱정 없이 상쾌하게
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Right */}
            <div className="order-first md:order-last">
              <img
                src="/manus-storage/comfort-lifestyle-image_d0e4b9d1.png"
                alt="편안함을 느끼는 여성"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Maker's Story Section */}
      <section id="story" className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - Right */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462775917/hqomRzkjkZ5MfiSrAtwV8x/factory-process-clean-HyaDAREVmcRnDMsDYd68vA.webp"
                alt="현대적인 제조 공장"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text - Left */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                  보이지 않는 곳에서 묵묵히, 오직 품질만을 고집합니다
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                수많은 국내외 유명 브랜드의 위생팬티를 생산하며 쌓아온 20년 장인의 기술력과 노하우. 우리는 화려한 마케팅 대신, 오직 제품의 본질과 품질에만 집중해왔습니다.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                이제 그 기술력을 당신에게 직접 선보입니다. 제조사의 투명성과 신뢰, 그리고 진심이 담긴 제품을 경험하세요.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">지속 가능한 생산 방식</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">엄격한 품질 관리 시스템</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">국내 생산 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
              기술이 만든 편안함
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              당신의 매일을 바꾸는 프리미엄 위생팬티의 특징
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">5중 흡수 구조</h3>
              <p className="text-sm text-muted-foreground">
                완벽한 샘 방지, 뛰어난 흡수력으로 안심하고 활동 가능
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">통기성 소재</h3>
              <p className="text-sm text-muted-foreground">
                습기와 열을 빠르게 배출하여 하루 종일 쾌적함 유지
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">항균 기능</h3>
              <p className="text-sm text-muted-foreground">
                특수 원단으로 불쾌한 냄새 걱정 없이 상쾌하게
              </p>
            </div>
          </div>

          {/* Product Detail Image */}
          <div className="mt-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462775917/hqomRzkjkZ5MfiSrAtwV8x/product-detail-close-up-EGzNMSMPwX2SCqdfgK2sfV.webp"
              alt="제품 상세 이미지 - 5중 흡수 구조"
              className="w-full h-auto rounded-lg shadow-lg max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
              이미 수많은 여성들이 경험했습니다
            </h2>
            <p className="text-lg text-muted-foreground">
              제조사의 기술력으로 완성된 프리미엄 위생팬티를 만나보세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-sm text-foreground mb-4">
                "밤새 뒤척여도 샘 걱정 없이 꿀잠 잤어요. 정말 신세계입니다!"
              </p>
              <p className="text-xs text-muted-foreground font-medium">김*희 고객님</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-sm text-foreground mb-4">
                "피부가 예민해서 아무거나 못 입는데, 이건 정말 편하고 자극이 없어요."
              </p>
              <p className="text-xs text-muted-foreground font-medium">박*영 고객님</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-sm text-foreground mb-4">
                "세탁도 간편하고, 환경까지 생각할 수 있어서 만족도가 높아요."
              </p>
              <p className="text-xs text-muted-foreground font-medium">이*진 고객님</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>
            지금 바로 공장 직송 가격으로 경험하세요
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            제조사의 기술력으로 완성된 프리미엄 위생팬티를 특별한 가격으로 만나보세요
          </p>
          <a
            href="https://www.amazoncare.com/goods/goods_view.php?goodsNo=1000009059"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md font-medium text-lg mx-auto"
          >
            프리미엄 위생팬티 구매하기
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm opacity-75">
            첫 구매 시 특별 할인 적용 | 배송료 무료
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                프리미엄 위생팬티
              </h3>
              <p className="text-sm text-muted-foreground">
                제조사의 기술력으로 완성된 프리미엄 위생팬티
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">제품</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">위생팬티</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">사이즈 가이드</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">세탁 방법</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">고객 지원</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">배송 정보</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">반품/교환</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">법적 정보</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">개인정보 처리방침</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">연락처</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 프리미엄 위생팬티. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
