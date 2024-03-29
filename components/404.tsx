import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

export function PageNotFound({ navigateTo }: { navigateTo: (destination: string) => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
            <div className="flex flex-col items-center space-y-2">
                <Button onClick={() => navigateTo("Dashboard")} variant="outline" size="lg" className="w-60">
                    Go to Dashboard
                    <ArrowTopRightIcon className="w-4 h-4 ml-2" />
                </Button>
                <Button onClick={() => navigateTo("Orders")} variant="outline" size="lg" className="w-60">
                    Go to Orders
                    <ArrowTopRightIcon className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    )
}