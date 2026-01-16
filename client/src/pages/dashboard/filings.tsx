import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSearch, Download, Filter, FileText } from "lucide-react";

export default function Filings() {
  const filings = [
    { type: "VAT Remittance", period: "Oct 2025", status: "Due", dueDate: "Oct 21, 2025", amount: "₦120,000" },
    { type: "WHT Filing", period: "Oct 2025", status: "Pending", dueDate: "Oct 21, 2025", amount: "₦45,000" },
    { type: "CIT Installment", period: "Q3 2025", status: "Paid", dueDate: "Sep 30, 2025", amount: "₦250,000" },
    { type: "PAYE Remittance", period: "Sep 2025", status: "Paid", dueDate: "Oct 10, 2025", amount: "₦85,000" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-heading">Filings & Returns</h1>
          <p className="text-muted-foreground">Manage your federal and state tax filings</p>
        </div>
        <Button className="bg-primary">New Filing</Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Filings</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
            <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" /> Export</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filings.map((filing, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{filing.type}</div>
                    <div className="text-xs text-muted-foreground">{filing.period} • Due: {filing.dueDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-right">
                  <div>
                    <div className="font-bold">{filing.amount}</div>
                    <div className="text-xs text-muted-foreground">Amount</div>
                  </div>
                  <Badge variant={filing.status === "Paid" ? "default" : filing.status === "Due" ? "destructive" : "secondary"}>
                    {filing.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
