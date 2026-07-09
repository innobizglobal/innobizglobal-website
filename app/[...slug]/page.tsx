import PageShell from '@/components/PageShell';
import { getPageForSlug } from '@/data/site';

export default function DynamicPage({ params }: { params: { slug: string[] } }) {
  const page = getPageForSlug(params.slug || []);
  return <PageShell page={page} />;
}
