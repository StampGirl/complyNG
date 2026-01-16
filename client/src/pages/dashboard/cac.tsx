import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Plus, FileCheck } from "lucide-react";

export default function CACManager() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-heading">CAC Manager</h1>
        <Button className="bg-primary"><Plus className="w-4 h-4 mr-2" /> Add Business</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Active Entities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold">TechSolutions Limited</div>
                <div className="text-xs text-muted-foreground">RC: 1234567</div>
              </div>
              <Button variant="ghost" size="sm">Manage</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-green-600" />
              Annual Returns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-green-50 border-green-100">
              <div className="text-green-800 font-bold text-sm">2024 Return Filed</div>
              <div className="text-xs text-green-600">Successfully processed on Jan 15, 2025</div>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50 border-orange-100">
              <div className="text-orange-800 font-bold text-sm">2025 Return Pending</div>
              <div className="text-xs text-orange-600">Due by June 30, 2026</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
