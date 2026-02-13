import { User, Briefcase, Users } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "独立开发者",
    description: "想快速完成软著材料准备并提交，不想在繁琐流程上浪费时间。",
    features: ["一键生成全套材料", "分钟级完成草稿", "在线编辑与导出"],
  },
  {
    icon: Briefcase,
    title: "自由职业者",
    description: "希望低成本、自助完成申请文档制作，减少外包费用。",
    features: ["透明积分定价", "自助完成材料", "专业排版输出"],
  },
  {
    icon: Users,
    title: "小型创业团队",
    description: "需要稳定、可复用的申请流程模板，高效管理多个项目。",
    features: ["批量申请管理", "进度实时追踪", "团队协作支持"],
  },
];

export function Audience() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            适合用户
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            为这些用户而生
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            无论你是个人开发者还是团队，知产猫都能帮你简化软著申请流程
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.title}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {audience.description}
                </p>
                <ul className="mt-auto flex flex-col gap-3">
                  {audience.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                        {"✓"}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
