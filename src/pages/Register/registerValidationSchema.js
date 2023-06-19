import { z } from "zod";

export const registerValidationSchema = z
  .object({
    name: z
      .string()
      .min(2, "O nome deve pelo menos 2 caracteres")
      .max(50, "O nome deve no máximo 50 caracteres")
      .nonempty(),

    email: z.string().email("O email deve estar no formato correto").nonempty(),

    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário ter pelo menos um caractere especial"
      )
      .regex(/(?=.*?[A-Z])/, "É necessário ter pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ter pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário ter pelo menos um número"),

    confirm: z.string().min(1, "As senhas devem ser iguais"),

    bio: z.string().nonempty("Escreva algo sobre você"),

    contact: z.string().nonempty("Adicione uma forma de contato"),

    course_module: z.string().nonempty("Selecioneum módulo"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });
