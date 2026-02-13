import Image from "next/image";
import {
  FileText,
  Code2,
  ListChecks,
  LayoutDashboard,
} from "lucide-react";

const showcaseItems = [
  {
    icon: LayoutDashboard,
    title: "智能工作台",
    description:
      "统一管理所有软著申请，实时查看进度。支持每日签到获取积分，快速开始新申请。",
    image: "/screenshots/dashboard-home.png",
    alt: "控制台展示",
  },
  {
    icon: ListChecks,
    title: "一站式申请流程",
    description:
      "填写软件名称与功能描述，AI 自动生成申请摘要与基础材料。在线编辑、提交、重新生成，全程可控。",
    image: "/screenshots/application-detail.png",
    alt: "申请详情展示",
  },
  {
    icon: FileText,
    title: "说明书导出",
    description:
      "Markdown 编辑器编写说明书，支持图表渲染。一键打印或导出为 PDF，直接用于提交。",
    image: "/screenshots/application-docs.png",
    alt: "说明书导出展示",
  },
  {
    icon: Code2,
    title: "源代码材料",
    description:
      "代码自动排版与分页处理，支持行号标注。导出后即可用于软著申请的程序鉴别材料。",
    image: "/screenshots/application-code.png",
    alt: "代码材料导出展示",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            产品展示
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            从创建到导出，一站搞定
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            覆盖软著申请全流程：新建申请、智能生成、在线编辑、材料导出
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            const isReversed = index % 2 === 1;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex flex-col lg:w-5/12">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="lg:w-7/12">
                  <div className="relative rounded-2xl border border-border bg-card p-2 shadow-xl shadow-primary/5 transition-shadow hover:shadow-2xl hover:shadow-primary/10">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1400}
                      height={900}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
