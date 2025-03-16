import styled from "styled-components";
import Link from "next/link";
import {UserRound} from "lucide-react";

const Avatar = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    &:hover {
        scale: 1.05;
    }
`;

const Text = styled.span`
    font-size: 1rem;
    font-weight: 600;
`;

export const AuthButton = () => {
    return (
        <Link href="/auth">
            <LinkWrapper>
            <Avatar><UserRound size={20} /></Avatar>
            <Text>Login</Text>
            </LinkWrapper>
        </Link>
    );
};