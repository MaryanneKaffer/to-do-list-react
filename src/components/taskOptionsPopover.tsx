import { Popover, PopoverTrigger, Button, PopoverContent, Listbox, ListboxItem, Tooltip } from "@nextui-org/react";
import { SlOptions } from "react-icons/sl";

export default function TaskOptionsPopover({ isPopoverOpen, setIsPopoverOpen, setModalOpen, handleDelete }: {
    isPopoverOpen: boolean;
    setIsPopoverOpen: (isOpen: boolean) => void;
    setModalOpen: (isOpen: boolean) => void;
    handleDelete: () => void;
}) {
    return (
        <Tooltip content="Options">
            <Popover isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen} placement="bottom" showArrow={true}>
                <PopoverTrigger>
                    <Button className="bg-transparent padding-0 min-w-12 w-12">
                        <SlOptions size={20} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Listbox aria-label="Task Options" color="default" variant="solid">
                        <ListboxItem key="edit" onPress={() => { setModalOpen(true); setIsPopoverOpen(false); }} >Edit task</ListboxItem>
                        <ListboxItem key="delete" className="text-danger" color="danger" onPress={handleDelete}>Delete task</ListboxItem>
                    </Listbox>
                </PopoverContent>
            </Popover>
        </Tooltip>
    )
}