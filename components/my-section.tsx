import { Section } from '@/models/section';

export default function MySection({ section }: { section: Section }) {
  const { name } = section;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">
          {name}
          <br />
        </h1>
      </div>
    </main>
  );
}
