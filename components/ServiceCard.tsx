type Props = {
  title: string;
};

export default function ServiceCard({ title }: Props) {
  return (
    <div className="p-6 bg-white border rounded-2xl hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}