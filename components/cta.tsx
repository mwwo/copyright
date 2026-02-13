import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-12 md:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-primary-foreground mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              <span>现在就开始</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              准备好生成你的软著材料了吗？
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-primary-foreground/80 leading-relaxed">
              注册即可免费体验，写一句项目描述就能开始。
              <br className="hidden md:block" />
              让 AI 帮你处理繁琐的材料准备工作。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="https://www.ruanzhu.ink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                免费开始使用
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.ruanzhu.ink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-white/20"
              >
                了解更多
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
