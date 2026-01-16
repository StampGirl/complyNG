import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function AuditTrails() {
  const logs = [
    { user: "Chioma Adebayo", action: "Generated VAT Return", timestamp: "Oct 16, 2025, 10:23 AM WAT", id: "AUD-9921", status: "Verified" },
    { user: "System", action: "FIRS Sync Completed", timestamp: "Oct 16, 2025, 08:00 AM WAT", id: "AUD-9920", status: "Verified" },
    { user: "Tunde Williams", action: "Updated WHT Credit Note", timestamp: "Oct 15, 2025, 04:15 PM WAT", id: "AUD-9919", status: "Verified" },
    { user: "System", action: "Unauthorized Login Attempt", timestamp: "Oct 15, 2025, 02:30 AM WAT", id: "AUD-9918", status: "Alerted" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-heading">Audit Trails</h1>
        <p className="text-muted-foreground text-sm">Compliant with Nigerian Evidence Act & WAT Timezone</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Action</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Timestamp (WAT)</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, i) => (
                  <tr key={i} className="border-b bg-card">
                    <td className="px-6 py-4 font-mono">{log.id}</td>
                    <td className="px-6 py-4 font-medium">{log.action}</td>
                    <td className="px-6 py-4">{log.user}</td>
                    <td className="px-6 py-4 text-muted-foreground">{log.timestamp}</td>
                    <td className="px-6 py-4">
                      <Badge variant={log.status === "Verified" ? "default" : "destructive"} className="shadow-none border-transparent">
                        {log.status === "Verified" ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                        {log.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
