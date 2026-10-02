"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import InputField from "@/components/admin/InputField";
import MessageErrorAlert from "@/components/admin/MessageErrorAlert";
import { signin } from "@/api/auth";
import type { SigninRequest } from "@/types/auth";

export default function AdminSignin() {
  const router = useRouter();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<SigninRequest>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = form;

  const formErrorMessages = Object.values(errors).map(
    (error) => error?.message,
  );

  const errorMessages = [
    ...formErrorMessages,
    ...(submitError ? [submitError] : []),
  ];

  const handleSubmitForm = async (data: SigninRequest) => {
    setSubmitError(null);

    try {
      await signin(data);
      router.push("/admin");
    } catch (error) {
      console.error(error);
      setSubmitError("メールアドレスまたはパスワードが正しくありません。");
    }
  };

  const handleInvalidSubmit = () => {
    setSubmitError(null);
  };

  return (
    <Box
      sx={{
        width: "626px",
        margin: "0 auto",
        paddingTop: "180px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontSize: "32px", fontWeight: "bold", margin: "0 auto" }}
      >
        管理者ログイン
      </Typography>

      <Box sx={{ mt: "56px" }}>
        {errorMessages.length > 0 && (
          <MessageErrorAlert
            messages={errorMessages}
            variant={submitError ? "filled" : "standard"}
          />
        )}

        <form onSubmit={handleSubmit(handleSubmitForm, handleInvalidSubmit)}>
          <InputField
            label="メールアドレス"
            type="email"
            placeholder="email@example.net"
            {...register("email", { required: "メールアドレスが未入力です" })}
          />
          <InputField
            label="パスワード"
            type="password"
            placeholder="Password"
            mt="24px"
            {...register("password", { required: "パスワードが未入力です" })}
          />
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 12,
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
            type="submit"
            disabled={isSubmitting}
          >
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              ログイン
            </Typography>
          </Button>
        </form>
      </Box>
    </Box>
  );
}
