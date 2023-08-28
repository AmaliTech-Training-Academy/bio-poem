-- CreateTable
CREATE TABLE "Questionnaire" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "adjectives" TEXT[],
    "importantRelation" TEXT NOT NULL,
    "loves" TEXT[],
    "feelings" TEXT[],
    "fears" TEXT[],
    "accomplishments" TEXT[],
    "expectations" TEXT[],
    "residence" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "backgroundTheme" TEXT,
    "profileImage" TEXT,

    CONSTRAINT "Questionnaire_pkey" PRIMARY KEY ("id")
);
