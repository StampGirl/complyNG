import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, MapPin } from "lucide-react";

export default function StateTaxes() {
  const states = [
    { name: "Lagos", status: "Compliant", obligations: ["PAYE", "WHT", "Business Premises"] },
    { name: "Rivers", status: "Attention Required", obligations: ["PAYE", "Infrastructure Levy"] },
    { name: "Abuja (FCT)", status: "Compliant", obligations: ["PAYE", "Area Council Taxes"] },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold font-heading">State-Level Compliance</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {states.map((state) => (
          <Card key={state.name}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {state.name}
              </CardTitle>
              <Badge variant={state.status === "Compliant" ? "default" : "destructive"}>{state.status}</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Active Obligations</p>
                <div className="flex flex-wrap gap-2">
                  {state.obligations.map(ob => <Badge key={ob} variant="outline" className="text-[10px]">{ob}</Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-0 h-[300px] flex items-center justify-center bg-muted/30 relative overflow-hidden">
          <Map className="w-12 h-12 text-muted-foreground opacity-20" />
          <span className="text-muted-foreground font-medium">Interactive Nigeria Map (Coming Soon)</span>
        </CardContent>
      </Card>
    </div>
  );
}
