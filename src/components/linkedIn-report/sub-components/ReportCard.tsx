import { FC, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ReportCardProps = {
  title: string;
  icon?: any;
  children: ReactNode;
  className?: string;
};

const ReportCard: FC<ReportCardProps> = ({
  title,
  icon: Icon,
  children,
  className,
}) => {
  return (
    <Card
      className={cn(
        "p-10 bg-white relative overflow-hidden rounded-lg shadow w-[100%] mt-10",
        className
      )}
    >
      <div className="flex items-center gap-2 text-3xl md:text-2xl font-semibold border-b border-primary/20 pb-3">
        {Icon && <Icon className="text-primary w-5 h-5" />}
        <h2 className="text-text-primary">{title}</h2>
      </div>
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
};

export default ReportCard;
