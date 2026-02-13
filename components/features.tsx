import { Clock, Coins, ShieldCheck, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "上手快",
    description: "一句话创建申请草稿，不懂流程也能开始。无需专业知识，即刻上手。",
    color: "text-primary bg-primary/10",
  },
  {
    icon: Coins,
    title: "成本低",
    description: "自己完成大部分材料准备，减少外包依赖。透明定价，按需付费。",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: ShieldCheck,
    title: "省时间",
    description:
      "说明书和代码材料自动整理，支持直接导出 PDF。分钟级生成，告别繁琐。",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: LayoutDashboard,
    title: "可追踪",
    description:
      "申请进度、时间线、材料都在一个工作台里查看。状态清晰，一目了然。",
    color: "text-secondary bg-secondary/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            核心优势
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            为什么选择知产猫
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            面向独立开发者和小团队，让软著申请材料准备不再是负担
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} mb-6`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
