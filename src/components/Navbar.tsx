import { Icon, Switch, Flex, Spacer } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

interface NavbarProps {
    toggleTheme: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentTheme: any; // or whatever type currentTheme should be
}

export default function Navbar({ toggleTheme, currentTheme }: NavbarProps) {
    return (
      <nav className="navbar" style={{backgroundColor: currentTheme.secondary}}>
        <Flex>
            <h2>Sedat Can Uygur</h2>
            <Spacer />
            <Flex>
                <div style={{padding: '0 1rem'}}>
                    <h2>Home</h2>
                </div>
                <div style={{padding: '0 1rem'}}>
                    <h2>About</h2>
                </div>
                <div style={{padding: '0 1rem'}}>
                    <h2>Work</h2>
                </div>
                <div style={{padding: '0 1rem'}}>
                    <h2>Contact</h2>
                </div>
            </Flex>
            <Spacer />
            <Switch.Root colorPalette="purple" size="lg" onChange={() => toggleTheme()}>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                    <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
                        <Icon as={FaSun} color="yellow.400" />
                    </Switch.Indicator>
                </Switch.Control>
                <Switch.Label></Switch.Label>
            </Switch.Root>
        </Flex>
      </nav>
    );
}