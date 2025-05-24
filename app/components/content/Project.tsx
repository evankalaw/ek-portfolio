interface Project {
  title: string;
  description: string;
}

export default function Project(props: Project) {
  const { title, description } = props;
  return (
    <div className="py-3">
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
}
