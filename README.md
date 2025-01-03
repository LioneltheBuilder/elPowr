# el powr
[![Screenshot-2024-11-25-132620.png](https://i.postimg.cc/fbHSCrMr/Screenshot-2024-11-25-132620.png)](https://postimg.cc/kVb5Xw6Q)

## Tech Stack

- **Front End:**  React, Next JS app Route, ShadCn
- **Back End:**   Supabase, Next JS SSR

### Folder Architecture: Clean Architecture

**Applications**
- The Applications layer contains the use cases or business logic that orchestrate operations between the domain and other layers.

**Domain**
- The Domain layer contains core business logic and rules, including entities and interfaces.

**Infrastructure**
- The Infrastructure layer contains implementation details like database interactions, API clients, and external service integrations (e.g., Supabase).

**Presentation**
- The Presentation layer contains UI components, pages, and controllers to handle user input and output.

## Summary

| **Folder**          | **Responsibility**                                                                                              | **Examples**                                |
|----------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| **Applications**     | High-level business logic and workflows (e.g., use cases).                                                   | `createUser.ts`, `fetchPosts.ts`           |
| **Domain**           | Core business models, rules, and interfaces.                                                                 | `User.ts`, `UserRepository.ts`             |
| **Infrastructure**   | Implementation of external dependencies like Supabase and APIs.                                              | `SupabaseUserRepository.ts`, `supabaseClient.ts` |
| **Presentation**     | UI components and pages for user interaction.                                                                | `UserForm.tsx`, `create.tsx`               |
# el powr
let there be powr
