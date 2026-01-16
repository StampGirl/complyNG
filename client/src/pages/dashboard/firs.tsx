import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FIRSPortal() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-heading">FIRS Portal</h1>
        <Button variant="outline"><RefreshCw className="w-4 h-4 mr-2" /> Sync with TaxPro-Max</Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tax Identification Number (TIN)</CardTitle>
            <CardDescription>Verified from Federal Inland Revenue Service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-6 bg-muted/50 rounded-xl border">
              <div>
                <div className="text-3xl font-bold tracking-wider">12345678-0001</div>
                <div className="text-sm text-green-600 font-medium mt-1 flex items-center gap-1">
                  <Badge className="bg-green-500">Active</Badge>
                  FIRS Verified
                </div>
              </div>
              <Landmark className="w-12 h-12 text-muted-foreground opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Portal Access</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <Button className="w-full justify-between" variant="outline">
               Go to TaxPro-Max <ExternalLink className="w-4 h-4" />
             </Button>
             <p className="text-xs text-muted-foreground text-center">
               ComplyNG is an authorized FIRS integration partner.
             </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
