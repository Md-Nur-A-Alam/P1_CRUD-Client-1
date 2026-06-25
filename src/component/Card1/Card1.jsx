import React, { use } from 'react';
import { Badge, Button, Separator } from "@heroui/react";
import { PencilToSquare, TrashBin } from '@gravity-ui/icons';

const Card1 = ({ user, index }) => {
    const { name, email, role } = user;
    return (
        <Badge.Anchor className="flex justify-start border rounded-2xl items-center">
            <div className="p-5 text-2xl">{index + 1}</div>
            <Separator orientation="vertical" />
            <div className="p-5">
                <div className="font-bold text-2xl">{name} </div>
                <div className="text-accent italic underline">{email}</div>
                <div className="flex justify-between mt-3 gap-2">
                    <Button variant="secondary" className="btn btn-soft bg-warning rounded-lg text-white"><PencilToSquare /></Button>
                    <Button variant="danger" className="btn btn-soft rounded-lg"><TrashBin /></Button>
                </div>
                <Badge color="accent" size="lg" variant='outline' className='p-2 bg-accent text-white'>
                    {role}
                </Badge>
            </div>
        </Badge.Anchor>
        //     <C>
        //     <Avatar>
        //       <Avatar.Image src={ORANGE_AVATAR_URL} />
        //       <Avatar.Fallback>AB</Avatar.Fallback>
        //     </Avatar>
        //     <Badge color="accent" size="sm">
        //       New
        //     </Badge>
        //   </Badge.Anchor>
    );
};

export default Card1;