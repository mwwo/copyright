import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "从来没想过申请软著能这么快。知产猫不仅帮我生成了文档，还指出了我代码中可能存在的合规风险，太专业了。",
    name: "Alex Chen",
    role: "全栈开发工程师",
    avatar: "AC",
  },
  {
    content:
      "作为自由职业者，之前一直找代理帮忙申请，费用不低还不透明。现在用知产猫自己就能搞定大部分材料，省了不少钱。",
    name: "王小明",
    role: "自由职业开发者",
    avatar: "王",
  },
  {
    content:
      "我们团队有好几个项目需要申请软著，知产猫的批量管理和进度追踪功能太好用了，再也不用 Excel 记录了。",
    name: "李悦",
    role: "创业团队技术负责人",
    avatar: "李",
  },
  {
    content:
      "说明书和代码材料的自动排版功能是亮点，导出的 PDF 直接就能用，不用再手动调格式。",
    name: "张明远",
    role: "独立开发者",
    avatar: "张",
  },
  {
    content:
      "AI 工具箱里的图表生成太实用了，做说明书里需要的架构图、流程图再也不用开其他软件了。",
    name: "刘佳",
    role: "产品经理",
    avatar: "刘",
  },
  {
    content:
      "注册后几分钟就生成了第一份草稿，虽然还需要微调，但已经帮我省了几天的工作量。强烈推荐！",
    name: "陈浩",
    role: "后端开发工程师",
    avatar: "陈",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            用户评价
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            来自开发者的真实反馈
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            已有众多开发者和团队通过知产猫完成软著材料准备
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground/80 mb-6">
                {`"${item.content}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
