FROM node:12-slim

LABEL com.github.actions.name="ESLint Marine"
LABEL com.github.actions.description="Lint your Typescript projects with inline lint error annotations."
LABEL com.github.actions.icon="code"
LABEL com.github.actions.color="blue"

COPY src /action/eslint/src
ENTRYPOINT ["/action/eslint/src/entrypoint.sh"]
