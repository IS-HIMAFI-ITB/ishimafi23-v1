import { Button } from '-/components/ui/button';
import { Typography } from '-/components/ui/typography';
import { trpcServer } from '-/trpc/server';

export default async function Home() {
  const hello = await trpcServer({}).example.hello();

  return (
    <main className='flex min-h-screen flex-col gap-4 p-6'>
      <Typography element='h1'>{hello}</Typography>
      <div className='flex flex-row items-center justify-center gap-8'>
        <Button>Default</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button variant={'destructive'}>Destructive</Button>
        <Button variant={'link'}>Link</Button>
        <Button variant={'ghost'}>Ghost</Button>
        <Button variant={'outline'}>Outline</Button>
        <Button variant={'accent'}>Accent</Button>
      </div>
    </main>
  );
}
