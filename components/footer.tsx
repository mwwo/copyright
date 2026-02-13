import { Logo } from "./logo";

const footerLinks = [
  {
    title: "产品",
    links: [
      { label: "功能介绍", href: "#features" },
      { label: "AI 工具箱", href: "#tools" },
      { label: "产品展示", href: "#showcase" },
    ],
  },
  {
    title: "支持",
    links: [
      { label: "帮助中心", href: "https://www.ruanzhu.ink" },
      { label: "联系我们", href: "https://www.ruanzhu.ink" },
      { label: "常见问题", href: "https://www.ruanzhu.ink" },
    ],
  },
  {
    title: "法律",
    links: [
      { label: "服务条款", href: "https://www.ruanzhu.ink" },
      { label: "隐私政策", href: "https://www.ruanzhu.ink" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <a href="#" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-bold text-foreground tracking-tight">
                知产猫
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              面向个人开发者和小团队的 AI
              软著材料生成平台。一句话创建，智能生成，快速导出。
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {'© 2024-2026 知产猫 (RuanZhuInk). All rights reserved.'}
          </p>
          <a
            href="https://www.ruanzhu.ink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            www.ruanzhu.ink
          </a>
        </div>
      </div>
    </footer>
  );
}
