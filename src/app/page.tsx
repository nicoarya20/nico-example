'use client'
import { Box, Button, Center, Container, Flex, Image, SimpleGrid, Space, Stack, Title } from "@mantine/core";
import { CustomHeader } from "./_ui/CustomHeader";
import Link from "next/link";

export default function Home() {

  const fontSize = "3.5rem";
  return (
    <Stack gap={"lg"}>
      <CustomHeader />
      <Container>
        <Stack justify="center" align="center">
          <Title>MacBook Pro</Title>
          <Title size={fontSize}>
            Begitu mengesankan.
          </Title>
          <Title size={fontSize}>
            Mencuri perhatian.
          </Title>
        </Stack>
      </Container>
      <Box h={400} bg={"gray"}>
        <Image h={400} w={"100%"} src={"https://www.apple.com/v/macbook-pro/ak/images/overview/welcome/welcome_hero_endframe__66ipqm3o5gyu_large_2x.jpg"} alt="" />
      </Box>
      <Center>
        <Button radius={50}>Beli</Button>
      </Center>
      <Space h={100} />
      <Container miw={890}>
        <Stack>
          <Flex align={"center"} justify={"space-between"}>
            <Title>Keunggulan demi keunggulan.</Title>
            <Flex>
              <Button variant="transparent" component={Link} href={"/"}>Tonton acara</Button>
            </Flex>
          </Flex>
          <Image radius={30} src={'/assets/ngopi.png'} alt="" />
        </Stack>
      </Container>
      <Space h={200} />
      <Stack bg={"black"} py={100}>
        <Box px={50}>
          <Title size={54}>Jelajahi cerita lengkapnya.</Title>
        </Box>
        <Space h={200} />
        <Container miw={890}>
          <Stack maw={890} gap={100}>
            <Title size={64}>Tiga lompatan besar.</Title>
            <Space h={60} />
            <Title order={3}>
              MacBook Pro melesat berkat chip M3, M3 Pro, dan M3 Max. Dirancang dengan teknologi 3 nanometer dan dilengkapi arsitektur GPU yang sepenuhnya baru, ini adalah chip tercanggih yang pernah dibuat untuk komputer pribadi. Dan masing-masing menghadirkan performa dan kemampuan yang lebih profesional
            </Title>
            <SimpleGrid cols={3} spacing={50}>
              <Stack p={"md"}>
                <Image src={"https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/mx__7nkrkdxhdzma_large_2x.jpg"} alt="" />
                <Stack gap={50}>
                  <Title>
                    CPU
                    8-core
                  </Title>
                  <Title>
                    CPU
                    8-core
                  </Title>
                  <Title>
                    CPU
                    8-core
                  </Title>
                </Stack>
              </Stack>
              <Stack p={"md"}>
                <Image src={"https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/mx__7nkrkdxhdzma_large_2x.jpg"} alt="" />
                <Stack gap={50}>
                  <Title>
                    CPU
                    8-core
                  </Title>
                  <Title>
                    CPU
                    8-core
                  </Title>
                  <Title>
                    CPU
                    8-core
                  </Title>
                </Stack>
              </Stack>
              <Stack p={"md"}>
                <Image src={"https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/mx__7nkrkdxhdzma_large_2x.jpg"} alt="" />
                <Stack gap={50}>
                  <Title>
                    CPU
                    8-core
                  </Title>
                  <Title>
                    CPU
                    8-core
                  </Title>
                  <Title>
                    CPU
                    8-core
                  </Title>
                </Stack>
              </Stack>

            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
