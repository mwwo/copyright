import Image from "next/image";
import {
  Palette,
  ImageIcon,
  FileImage,
  FileOutput,
  Video,
  Handshake,
} from "lucide-react";

const tools = [
  {
    icon: Palette,
    name: "图表工坊",
    description: "AI 智能图表生成，支持架构图、流程图、思维导图，一键导出 SVG/PNG",
    tag: "AI 图表",
    tagColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: ImageIcon,
    name: "图片处理工具",
    description: "一站式图片处理：背景移除、压缩、格式转换、缩略图生成",
    tag: "AI 图表",
    tagColor: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: FileImage,
    name: "PDF 转图片",
    description: "将 PDF 文档批量转换为 PNG/JPG 图片，支持清晰度与背景设置",
    tag: "AI 图表",
    tagColor: "bg-amber-50 text-amber-600",
  },
  {
    icon: FileOutput,
    name: "图片转 PDF",
    description: "多张图片合并为一个 PDF，支持尺寸、方向与边距设置",
    tag: "AI 图表",
    tagColor: "bg-rose-50 text-rose-600",
  },
  {
    icon: Video,
    name: "多模态生成工坊",
    description: "文生图、图生图、文/图生视频，统一调度多模型生成",
    tag: "媒体生成",
    tagColor: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Handshake,
    name: "合作协议生成",
    description: "快速生成规范的软件合作开发协议，支持多种合作模式",
    tag: "协议文档",
    tagColor: "bg-primary/10 text-primary",
  },
];

export function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            AI 工具箱
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            不止是软著，更多实用工具
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            AI 驱动的图表生成与知识产权辅助工具，提升你的创作效率
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${tool.tagColor}`}
                  >
                    {tool.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {tool.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tools Screenshot */}
        <div className="mt-16">
          <div className="relative rounded-2xl border border-border bg-card p-2 shadow-xl shadow-primary/5">
            <Image
              src="/screenshots/tools-overview.png"
              alt="AI 工具箱展示"
              width={1920}
              height={1080}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
