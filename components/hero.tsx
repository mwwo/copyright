"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent via-background to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{'RUANZHU.INK \u00B7 你的 AI 软著专员'}</span>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            一句话生成
            <br />
            <span className="text-primary">软著申请材料草稿</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            基于公开指南模板，智能生成申请表、源代码文档与说明书草稿。
            <br className="hidden md:block" />
            安全、高效、专业。
          </p>

          {/* Input bar */}
          <div className="mt-10 flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-border bg-card p-2 shadow-lg shadow-primary/5">
            <input
              type="text"
              placeholder="例如：基于 Vue3 的医院预约挂号小程序..."
              className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none md:text-base"
              readOnly
            />
            <a
              href="https://www.ruanzhu.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md md:text-base"
            >
              <Sparkles className="h-4 w-4" />
              立即生成
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: "clock", value: "10min+", label: "分钟级成稿" },
              { icon: "file", value: "价格透明", label: "费用可追溯" },
              { icon: "shield", value: "安心保障", label: "未过退积分" },
              { icon: "calendar", value: "2020-2026", label: "多年案例积累" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <span className="text-lg font-bold text-foreground md:text-xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Hero Screenshot */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
              <Image
                src="/screenshots/home-hero.png"
                alt="知产猫首页展示"
                width={1920}
                height={1080}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
