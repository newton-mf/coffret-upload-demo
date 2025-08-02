# Coffret Architecture Demo

**Purpose**: Minimal Next.js demos for rapid architectural understanding and iterative prototyping.

## Current Demos

### 1. File Upload Architecture Demo
**Route**: `/` (homepage)  
**Learning Goal**: Understand full-stack file upload flow  
**Time**: 10-15 minutes  

**What it demonstrates**:
- Browser FormData → HTTP multipart → Rails processing → S3 upload
- Production endpoints (22.6k req/hour CSRF, 0% error rate)
- Console-based technical flow explanation

**Usage**:
```bash
npm run dev
# Open http://localhost:3000
# Open browser console (F12)
# Click demo buttons
```

## Project Philosophy

### For AI Agents
- **Minimal complexity**: Single-purpose demos, easy to understand
- **Console-based learning**: Technical details in browser console
- **Mock data**: No external dependencies, immediate results
- **Clear file structure**: `/src/app/[demo-name]/page.tsx` pattern

### For Humans  
- **Principal engineer focused**: Architecture over implementation
- **Time-boxed learning**: 10-15 minute understanding bursts
- **Iterative building**: Add new demos without affecting existing ones

## Quick Start

### Prerequisites
- Node.js 18+
- Modern browser with console access

### Setup
```bash
npm install --legacy-peer-deps
npm run dev
```

### Adding New Demos
1. Create `/src/app/[demo-name]/page.tsx`
2. Add route to this README
3. Follow existing console-logging pattern
4. Keep it minimal and focused

## Architecture Principles

### File Structure
```
src/app/
├── page.tsx                    # File upload demo (current)
├── [future-demo]/page.tsx      # Future architectural demos
├── layout.tsx                  # Shared layout
└── globals.css                 # Tailwind styles
```

### Demo Pattern
```typescript
export default function DemoPage() {
  const demonstrateFlow = () => {
    console.log("📋 DEMO: [Demo Name]")
    console.log("Step 1: ...")
    console.log("Step 2: ...")
    // Mock data examples
    console.log("📊 Mock Response:", mockData)
  }
  
  return (
    <div>
      <button onClick={demonstrateFlow}>
        Demonstrate Flow (Check Console)
      </button>
    </div>
  )
}
```

## Future Demo Ideas

### Potential Additions
- **Authentication Flow**: SSO → Cookie → Session management
- **API Integration**: Generated client → Rails endpoints
- **Real-time Updates**: WebSocket → UI state sync
- **Error Handling**: Rails errors → Frontend display
- **Performance Patterns**: Caching → Loading states

### Adding Demos
- Each demo = separate route
- Independent functionality
- Console-based learning
- 10-15 minute time limit
- Mock data preferred

## Development Notes

### For AI Agents Reading This Repo
- **Purpose**: Quick architectural understanding
- **Pattern**: Console demonstrations with mock data
- **Focus**: Data flow over UI implementation
- **Scope**: Single-concept demos, not full applications

### Dependencies
- **Next.js 14**: App Router, TypeScript support
- **Tailwind CSS**: Minimal styling
- **No external APIs**: All demos use mock data
- **No authentication**: Focus on technical patterns

## Contributing

### New Demo Checklist
- [ ] Single architectural concept
- [ ] Console-based explanation
- [ ] Mock data (no external deps)
- [ ] 10-15 minute learning time
- [ ] Update this README
- [ ] Follow existing file patterns

### Quality Standards
- **Simplicity**: Remove 90% of irrelevant details
- **Clarity**: Principal engineer level explanation
- **Speed**: Immediate understanding, no setup complexity
- **Independence**: Each demo works standalone

---

**Last Updated**: 2025-08-02  
**Primary Demo**: File Upload Architecture  
**Target Audience**: Principal engineers, AI agents  
**Learning Philosophy**: Minimal, focused, console-driven