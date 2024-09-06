import { ActionIcon, Box, Button, Container, Flex, Stack } from "@mantine/core";
import { useHover, useShallowEffect } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";
import { FaApple, FaSearch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const listMenu = [
    {
        label: "Mac",
        link: "/mac"
    },
    {
        label: "Ipad",
        link: "/ipad"
    },
    {
        label: "Iphone",
        link: "/iphone"
    },
    {
        label: "Watch",
        link: "/watch"
    },
    {
        label: "Tv",
        link: "/tv"
    },
    {
        label: "Music",
        link: "/music"
    },
    {
        label: "Support",
        link: "/support"
    },
    {
        label: "Business",
        link: "/business"
    }
]

type ListMenu = {
    label: string
    link: string
}

export function CustomHeader() {
    const [hovered, setHovered] = useState<string | null>(null)

    function onHover(value: string) {
        setHovered(value)
    }
    return <Flex w={"100%"}>
        <Container>
            <Flex gap={"lg"} align={"center"} justify={"space-around"} p={"md"}>
                <FaApple />
                {listMenu.map((v, k) => <MenuItemV3 key={k} data={v} onHover={onHover} />)}
                <Button component={Link} href={"/auth/login"} variant="transparent" size="compact-xs">login</Button>
                <ActionIcon variant="transparent" size={"xs"} >
                    <FaSearch />
                </ActionIcon>
            </Flex>
            {hovered && <MenuItemV2 dataHover={hovered} setHovered={setHovered} />}
        </Container>
    </Flex>
}

function MenuItemV2({ dataHover, setHovered }: { dataHover: string, setHovered?: (value: string | null) => void }) {

    function onClose() {
        setHovered?.(null)
    }

    return <Box bg={"gray"} w={720} h={200} pos={"absolute"}>
        <Stack gap={0}>
            <Flex justify={"end"}>
                <ActionIcon radius={100} onClick={onClose}>
                    <FaX />
                </ActionIcon>
            </Flex>
            {dataHover}
        </Stack>
    </Box>
}

function MenuItemV3({ data, onHover }: { data: ListMenu, onHover?: (value: string) => void }) {
    const { hovered, ref } = useHover();

    useShallowEffect(() => {
        if (hovered) {
            onHover?.(data.label)
        }
    }, [hovered])
    return <div ref={ref}>
        <Button color="gray" variant="transparent" size="compact-xs">{data.label}</Button>
    </div>
}

// function MenuItem({ data }: { data: ListMenu }) {
//     return <HoverCard >
//         <HoverCard.Target>
//             <Button color="gray" variant="transparent" size="compact-xs">{data.label}</Button>
//         </HoverCard.Target>
//         <HoverCard.Dropdown w={720} h={200}>
//             <Button component={Link} href={"/auth/login"} variant="transparent" size="compact-xs">{data.label}</Button>
//         </HoverCard.Dropdown>
//     </HoverCard>
// }