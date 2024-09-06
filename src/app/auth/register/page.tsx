'use client'
import { ActionIcon, Button, Container, Group, Stack, Text, TextInput, Title } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function Page() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    return <Stack>
        <Container>
            <Stack>
                <ActionIcon variant="transparent" size="xs" component={Link} href="/">
                    <FaArrowCircleLeft />
                </ActionIcon>
                <Title order={3}>Register</Title>
                <TextInput value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} label="Name" />
                <TextInput value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} label="Email" />
                <TextInput value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} label="Password" />
                <Button>Login</Button>
                <Group>
                    <Text>if you have an account</Text>
                    <Button variant="transparent" size="xs" component={Link} href="/auth/login">Login</Button>
                </Group>
                {JSON.stringify(form)}
            </Stack>
        </Container>

    </Stack>
}