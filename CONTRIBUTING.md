# Contributing to Awesome CDK TypeScript

First off, thank you for considering contributing to Awesome CDK TypeScript! It's people like you that make this resource valuable for the CDK TypeScript community.

## Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Contribution Guidelines](#contribution-guidelines)
- [Quality Standards](#quality-standards)
- [Pull Request Process](#pull-request-process)
- [Code of Conduct](#code-of-conduct)

## How Can I Contribute?

### Adding a New Resource

We welcome additions of high-quality CDK TypeScript resources! This includes:

- **Construct Libraries** - Well-maintained NPM packages
- **Tools & Utilities** - Development or deployment tools
- **Learning Resources** - Tutorials, courses, or documentation
- **Patterns & Examples** - Reusable patterns or example projects
- **Real-World Projects** - Open source CDK applications

### Improving Existing Content

- Fix broken links
- Update outdated information
- Improve descriptions
- Add missing badges or metadata
- Enhance code examples

### Reporting Issues

- Report broken links
- Suggest removals for unmaintained projects
- Point out duplicate entries
- Propose new categories

## Contribution Guidelines

### Resource Requirements

All submitted resources must meet these criteria:

#### Required
- ✅ **TypeScript Support** - Must be TypeScript-first or have excellent TypeScript support
- ✅ **Active Maintenance** - Recent commits (within 6 months) or stable release
- ✅ **Documentation** - Clear README with usage instructions
- ✅ **Value Addition** - Adds unique value to the ecosystem
- ✅ **Working State** - Project must be functional

#### Preferred
- ⭐ Open source with permissive license
- ⭐ Good test coverage
- ⭐ TypeScript types exported
- ⭐ CDK v2 compatible
- ⭐ Regular releases

### Formatting Guidelines

#### For Construct Libraries

```markdown
- 📦 [package-name](https://github.com/user/repo) - Brief description (max 100 chars)
  ![npm](https://img.shields.io/npm/v/package-name)
  ![downloads](https://img.shields.io/npm/dm/package-name)
  ![last-commit](https://img.shields.io/github/last-commit/user/repo)
```

#### For Learning Resources

```markdown
- 📚 [Resource Title](https://url) - Clear description of what readers will learn
```

#### For Tools

```markdown
- 🛠️ [Tool Name](https://url) - What it does and why it's useful
```

#### For Patterns/Examples

```markdown
- 🏗️ [Pattern Name](https://url) - Use case and key technologies used
```

### Code Examples

When adding code examples, ensure they are:

1. **Correct** - Test your code
2. **Concise** - Show the essential parts
3. **Commented** - Add helpful comments
4. **TypeScript** - Use proper TypeScript syntax

```typescript
// ✅ Good Example
export class MyConstruct extends Construct {
  constructor(scope: Construct, id: string, props: MyConstructProps) {
    super(scope, id);
    // Clear, typed implementation
  }
}

// ❌ Bad Example
export class MyConstruct extends Construct {
  constructor(scope, id, props) { // Missing types!
    super(scope, id);
  }
}
```

## Quality Standards

### What Makes a Great Addition?

- **Solves a Real Problem** - Addresses actual CDK TypeScript challenges
- **Well Documented** - Includes examples, API docs, and getting started guide
- **Production Ready** - Stable and tested
- **Community Backed** - Has users, contributors, or community support
- **Unique Value** - Not a duplicate of existing resources

### What We Don't Accept

- ❌ Promotional content without value
- ❌ Closed-source commercial products (unless free tier exists)
- ❌ Resources primarily in other languages
- ❌ Unmaintained or deprecated projects
- ❌ Low-quality or incomplete resources
- ❌ Duplicate entries

## Pull Request Process

### 1. Fork and Clone

```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR-USERNAME/awesome-cdk-typescript.git
cd awesome-cdk-typescript
git checkout -b add-amazing-construct
```

### 2. Make Your Changes

- Add your resource in the appropriate section
- Maintain alphabetical order within sections
- Follow the formatting guidelines
- Update the table of contents if needed

### 3. Validate Your Changes

```bash
# Check for broken links
npm run check-links

# Verify markdown formatting
npm run lint-markdown

# Preview your changes
npm run preview
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "Add [Resource Name] to [Section Name]"
```

Use clear commit messages:
- ✅ `Add cdk-amplify-constructs to Serverless section`
- ✅ `Fix broken link for CDK Workshop`
- ✅ `Update aws-cdk-lib to v2.100.0`
- ❌ `Update README`
- ❌ `Added stuff`

### 5. Submit Pull Request

1. Push your branch to your fork
2. Create a Pull Request from your fork to our main branch
3. Fill out the PR template completely
4. Wait for review

### PR Template

```markdown
## Type of Change
- [ ] New resource addition
- [ ] Fix (broken link, typo, etc.)
- [ ] Enhancement (better description, example, etc.)
- [ ] Removal (deprecated/unmaintained resource)

## Resource Information (for additions)
- **Name**:
- **URL**:
- **Category**:
- **NPM Package** (if applicable):
- **Last Updated**:
- **CDK Version Compatibility**:

## Checklist
- [ ] Follows formatting guidelines
- [ ] Includes all required badges/metadata
- [ ] Added in correct category
- [ ] Maintains alphabetical order
- [ ] Tested links work
- [ ] No duplicate entry

## Why This Should Be Included
Brief explanation of the value this adds...
```

## Review Process

### What We Look For

1. **Relevance** - Is this useful for CDK TypeScript developers?
2. **Quality** - Does it meet our quality standards?
3. **Formatting** - Does it follow our guidelines?
4. **Uniqueness** - Does it add new value?
5. **Maintenance** - Is it actively maintained?

### Response Time

- We aim to review PRs within 3-5 days
- Complex additions may take longer
- We'll provide feedback if changes are needed

## Code of Conduct

### Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone.

### Expected Behavior

- Be respectful and inclusive
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Personal attacks
- Trolling or inflammatory comments
- Public or private harassment
- Publishing others' private information

### Enforcement

Project maintainers will remove, edit, or reject contributions that don't align with this Code of Conduct.

## Recognition

Contributors who make significant contributions will be:
- Added to our [Contributors](#) list
- Mentioned in release notes
- Given credit in commit messages

## Questions?

Feel free to:
- Open an issue for discussion
- Reach out on Twitter [@awesome_cdk](https://twitter.com)
- Join the CDK.dev Slack community

---

Thank you for helping make Awesome CDK TypeScript better! 🚀