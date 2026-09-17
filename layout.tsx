import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: { default: '朱珂 · 产品经理/产品运营求职', template: '%s | 朱珂' },
  description: '在低资源、新品类0-1阶段里，用数据和跨端资源整合把DAU做起来的产品运营新人。27届应届生，求职产品经理/产品运营方向。',
  keywords: ['产品运营','产品经理','用户增长','数据驱动','互联网','求职'],
  authors: [{ name: '朱珂' }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
