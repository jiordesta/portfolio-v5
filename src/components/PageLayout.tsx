interface PageLayoutProps {
    children: React.ReactNode;
    id: string
}

export default function PageLayout({children, id}: PageLayoutProps) {
  return (
    <section id={`${id}`} className="p-2 md:p-4 lg:p-6 h-full w-full">
      {children}
    </section>
  )
}
