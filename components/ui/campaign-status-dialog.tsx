import { useState } from 'react';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface CampaignStatusDialogProps {
    status: boolean;
    showDialog: boolean;
    setShowDialog: (showDialog: boolean) => void;
}

export function CampaignStatusDialog({ status, showDialog, setShowDialog }: CampaignStatusDialogProps) {

    return (
        <AlertDialog open={showDialog}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{status ? 'Success' : 'Error'}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {status 
                            ? 'Email campaign has been created successfully.'
                            : `There was an error creating your email campaign. Please contact our support team for assistance. You can reach us at ${process.env.SUPPORT_LINK}.`
                        }
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setShowDialog(false)}>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}