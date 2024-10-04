import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React from "react";
import { siteConfig } from "@/config/site";
import { Avatar } from "@nextui-org/avatar";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ButtonGroup, Checkbox, Input, Link } from "@nextui-org/react";
interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIN, setIsLoggedIN] = React.useState(false);
  const [menuSize, setMenuSize] = React.useState(64);
  const { isOpen: isFirstModalOpen, onOpen: openFirstModal, onClose: closeFirstModal } = useDisclosure();
  const { isOpen: isSecondModalOpen, onOpen: openSecondModal, onClose: closeSecondModal } = useDisclosure();

  const handleLogin = () => {
    setIsLoggedIN(true);
    setMenuSize(96);
  };
  const handleLogout = () => {
    setIsLoggedIN(false);
    setMenuSize(64);
  };
  const handleSignUp = () => {
    setIsLoggedIN(true);
    setMenuSize(96);
  };


  return (
    <div className={className}>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="w-full absolute h-24 backdrop-blur-sm bg-opacity-0"
        onMenuOpenChange={setIsMenuOpen}
      >
        <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
          <p className="font-bold text-inherit text-2xl">
            Joint community based project
          </p>
        </div>

        <NavbarContent className="flex items-center justify-between w-full mt-8 z-10">
          <div className="flex-shrink-0">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="ml-0"
            />
            {isMenuOpen && (
              <div className="items-center text-center flex flex-col absolute top-full left-0 z-50 w-auto shadow-lg p-4 mt-2 backdrop-blur-sm bg-opacity-0">
                {
                  isLoggedIN && (<>
                    <p className="mb-2">Hello Aidan</p>
                    <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" className="mb-2" />
                    <NavbarMenuItem key={`Profile`}>
                      <Button color="primary" className="mb-2">
                        Profile
                      </Button>
                    </NavbarMenuItem>

                    <NavbarMenuItem key={`Support`} className="mb-2">
                      <Button color="primary">
                        Support
                      </Button>
                    </NavbarMenuItem>

                    <NavbarMenuItem key={`Ticket`} className="mb-2">
                      <Button color="primary">
                        My Tickets
                      </Button>
                    </NavbarMenuItem>

                    <NavbarMenuItem key={`logout`} className="mb-2">
                      <Button color="danger" onClick={handleLogout}>
                        Log Out
                      </Button>
                    </NavbarMenuItem>
                  </>)
                }
                {
                  !isLoggedIN && (<>
                    <p className="mb-2">Welcome</p>
                    <NavbarMenuItem key={`Login`} className="mb-2">
                      <Button onClick={openFirstModal} color="primary" className="mb-2">Login</Button>
                      <Modal
                        isOpen={isFirstModalOpen}
                        onOpenChange={closeFirstModal}
                        placement="top-center"
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                              <ModalBody>
                                <Input
                                  label="Email"
                                  placeholder="Enter your email"
                                  variant="bordered"
                                />
                                <Input

                                  label="Password"
                                  placeholder="Enter your password"
                                  type="password"
                                  variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                  <Checkbox
                                    classNames={{
                                      label: "text-small",
                                    }}
                                  >
                                    Remember me
                                  </Checkbox>
                                  <Link color="primary" href="#" size="sm">
                                    Forgot password?
                                  </Link>
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                  Close
                                </Button>
                                <Button color="primary" onPress={() => { onClose(), handleLogin() }} >
                                  Sign in
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </NavbarMenuItem>

                    <NavbarMenuItem key={`SignUp`} className="mb-2">
                      <Button onPress={openSecondModal} color="primary" className="mb-2">Sign Up</Button>
                      <Modal
                        isOpen={isSecondModalOpen}
                        onOpenChange={closeSecondModal}
                        placement="top-center">
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                              <ModalBody>
                                <Input
                                  label="Name"
                                  placeholder="Enter your name"
                                  variant="bordered"
                                />
                                <Input
                                  label="Email"
                                  placeholder="Enter your email"
                                  variant="bordered"
                                />
                                <Input
                                  label="Password"
                                  placeholder="Enter your password"
                                  type="password"
                                  variant="bordered"
                                />
                                <Input
                                  label="Password"
                                  placeholder="Confirm your password"
                                  type="password"
                                  variant="bordered"
                                />
                              </ModalBody>
                              <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                  Close
                                </Button>
                                <Button color="primary" onPress={() => { onClose(), handleSignUp() }} >
                                  Sign up
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </NavbarMenuItem>

                  </>)
                }
              </div>
            )}
          </div>

          <div className="flex-grow flex justify-center">
            <ButtonGroup className="mx-12">

              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  underline="hover"
                  className="mx-6 underline-offset-8 decoration-2 text-2xl"
                >
                  {item.label}
                </Link>
              ))}
            </ButtonGroup>
          </div>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
