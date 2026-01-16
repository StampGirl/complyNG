import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Shield } from "lucide-react";

export default function Team() {
  const members = [
    { name: "Chioma Adebayo", role: "Finance Lead", access: "Admin" },
    { name: "Tunde Williams", role: "Accountant", access: "Editor" },
    { name: "Sandra Eze", role: "Tax Consultant", access: "Auditor" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-heading">Team Management</h1>
        <Button className="bg-primary"><UserPlus className="w-4 h-4 mr-2" /> Invite Member</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {members.map((member) => (
              <div key={member.name} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{member.name}</div>
                    <div className="text-xs text-muted-foreground">{member.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    {member.access}
                  </Badge>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
