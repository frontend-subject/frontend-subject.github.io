import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  if (ExecutionEnvironment.canUseDOM) {
    window.location.href = '/docs/intro'
  }
  return "";
}
