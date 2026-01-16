import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold font-heading">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Business Profile</CardTitle>
          <CardDescription>Update your Nigerian business details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Business Name</Label>
              <Input defaultValue="TechSolutions Limited" />
            </div>
            <div className="space-y-2">
              <Label>TIN</Label>
              <Input defaultValue="12345678-0001" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Registered Address</Label>
            <Input defaultValue="12, Lagos Island, Lagos" />
          </div>
          <Button className="bg-primary">Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>How you receive compliance alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>SMS Alerts (Termii)</Label>
              <p className="text-sm text-muted-foreground">Receive critical tax deadlines via SMS</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Reports</Label>
              <p className="text-sm text-muted-foreground">Weekly compliance health summary</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
