const { execSync } = require("child_process");

const branchPatterns = {
    feature: /^feature\/NS-\d+$/,
    hotfix: /^hotfix\/NS-\d+$/,
    release: /^release\/\d+\.\d+\.\d+$/,
};

function getBranchName() {
    try {
        return execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
    } catch (error) {
        console.error("Failed to get branch name:", error.message);
        process.exit(1);
    }
}
function validateBranch(branchName) {
    const branchType = Object.keys(branchPatterns).find((prefix) =>
        branchName.startsWith(`${prefix}/`),
    );
    if (!branchType) {
        const examples = [
            "feature/NS-{ticket-number}",
            "hotfix/NS-{ticket-number}",
            "release/{version-number} (e.g., 0.0.1, 1.2.3)",
        ];

        printError(
            `Invalid branch prefix: ${branchName}`,
            "Branch names must start with one of these prefixes:",
            examples,
        );
        return false;
    }

    if (!branchPatterns[branchType].test(branchName)) {
        const examples = {
            feature: ["feature/NS-123"],
            hotfix: ["hotfix/NS-789"],
            release: ["release/0.0.1", "release/1.2.3"],
        };

        const formatMessage =
            branchType === "release"
                ? "Release branch names must follow the format:\nrelease/{version-number}"
                : `${branchType.charAt(0).toUpperCase() + branchType.slice(1)} branch names must follow the format:\n${branchType}/NS-{ticket-number}`;

        printError(
            `Invalid ${branchType} branch name: ${branchName}`,
            formatMessage,
            examples[branchType],
        );
        return false;
    }

    return true;
}

function printError(errorMessage, formatInstruction, examples) {
    console.error(`❌ ${errorMessage}`);
    console.error(formatInstruction);
    console.error("Examples:");
    examples.forEach((example) => console.error(`✅ ${example}`));
    process.exit(1);
}

const branchName = getBranchName();
if (validateBranch(branchName)) {
    console.log(`✅ Branch name format is valid: ${branchName}`);
    process.exit(0);
}