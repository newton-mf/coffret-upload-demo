# Coffret File Upload Architecture Demo - PRD

## Overview
This is a minimal Next.js application created to demonstrate the file upload architecture and data flow between a Next.js frontend and Rails backend, specifically for the Coffret file management system.

## Purpose
- **Educational**: Help principal engineers understand the full-stack file upload flow
- **Architecture Focus**: Demonstrate data flow without complex implementation details
- **Time-boxed**: 10-15 minute demonstration, not a production-ready application

## Scope

### In Scope
- Visual demonstration of file upload data flow
- Console logging of each step in the process
- Mock request/response structures
- Production endpoint documentation
- Architecture pattern explanation

### Out of Scope
- Actual file upload functionality
- Real API integration with Rails backend
- Authentication implementation
- Production deployment
- Complex UI/UX features
- Error handling beyond demonstration

## Technical Specifications

### Frontend Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Approach**: Client-side only (no SSR needed for demo)

### Architecture Demonstration

#### Key Endpoints (From Production Analysis)
1. **CSRF Token**: `/frontend/v1/internal/csrf_tokens`
   - Production usage: 22.6k requests/hour
   - Purpose: Generate CSRF tokens for secure form submissions

2. **File Upload**: `/frontend/v1/bulk_coffret_files`
   - Currently used by production Next.js frontend
   - Handles multipart/form-data uploads
   - Supports bulk file operations

3. **Authentication**: Cookie-based session management
   - Automatic cookie forwarding
   - Rails session validation

#### Data Flow Steps
1. **Authentication Check**: Verify user session
2. **CSRF Token Fetch**: Get security token from Rails
3. **File Selection**: User selects files → Browser stores as File objects in memory
4. **FormData Creation**: JavaScript converts File objects to FormData with binary data
5. **HTTP Transmission**: Browser sends multipart/form-data POST with actual binary file content
6. **Rails Processing**: 
   - Controller validates quota/permissions per file
   - CoffretFileCreateForm reads binary data from temp file 
   - FileUploadService creates database record + uploads to S3
   - Background jobs triggered (thumbnails, OCR, timestamps)
7. **Response Handling**: Process returned file metadata
8. **UI Update**: Display upload results

**Technical Detail**: Files are transmitted as raw binary data in HTTP multipart/form-data encoding, not JSON. Browser's FormData API handles all binary encoding automatically.

## Implementation Details

### File Structure
```
coffret-upload-demo/
├── src/app/page.tsx          # Main demo page
├── src/app/layout.tsx        # Root layout
├── src/app/globals.css       # Tailwind styles
├── PRD.md                    # This document
├── package.json              # Dependencies
├── next.config.js            # Next.js config
├── tailwind.config.js        # Tailwind config
└── tsconfig.json             # TypeScript config
```

### Core Features
- **Two demonstration buttons**:
  1. "Demonstrate Upload Flow" - Shows complete data flow
  2. "Show API Client Pattern" - Explains API integration

- **Console logging**: All details logged to browser console
- **Mock data**: Realistic request/response structures
- **Production stats**: Real usage data from Datadog analysis

### Demo Flow
1. User opens `http://localhost:3000`
2. User opens browser developer console
3. User clicks demonstration buttons
4. Console shows step-by-step architectural flow
5. User gains understanding of full-stack integration

## Business Value

### For Principal Engineers
- **Quick architectural understanding** without implementation complexity
- **Production-proven patterns** based on real endpoint usage
- **Full-stack visibility** from frontend to Rails backend
- **Time-efficient learning** (10-15 minutes total)

### For Development Teams
- **Reference implementation** for similar file upload features
- **Architecture documentation** with working examples
- **Integration patterns** for Next.js + Rails applications

## Success Criteria
- [x] Demo loads successfully in browser
- [x] Both buttons trigger console demonstrations
- [x] Complete data flow is clearly explained
- [x] Production endpoint details are accurate
- [x] Can be understood by principal engineer in 10-15 minutes

## Non-Functional Requirements

### Performance
- Instant page load (no API calls)
- Immediate button responses
- Minimal resource usage

### Maintainability  
- Simple, single-file implementation
- Clear code comments explaining each step
- Easy to modify or extend

### Documentation
- Comprehensive PRD (this document)
- Inline code documentation
- Clear setup instructions

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Quick Start
```bash
cd coffret-upload-demo
npm run dev
# Open http://localhost:3000
```

### Usage
1. Open browser developer console (F12)
2. Click "🚀 Demonstrate Upload Flow"
3. Review console output for complete data flow
4. Click "🔧 Show API Client Pattern" for integration details

## Future Considerations

### If Converting to Working Implementation
- Add real API client configuration
- Implement file selection UI component
- Add progress tracking for uploads
- Include error handling and retry logic
- Add authentication integration
- Implement file validation

### Architectural Extensions
- WebSocket for real-time upload progress
- Chunked upload for large files
- Client-side file compression
- Upload queue management
- Drag-and-drop interface

## Related Documentation
- Datadog Endpoint Analysis: `/coffret/.cursor/rules/coffret-tasks/datadog-endpoint-analysis.md`
- Production Frontend: `/coffret_frontend/src/lib/apiClient.ts`
- Rails Controllers: `/coffret/app/controllers/frontend/v1/bulk_coffret_files_controller.rb`

---

**Created**: 2025-08-02  
**Purpose**: Architecture demonstration for principal engineer understanding  
**Duration**: 10-15 minute learning exercise  
**Status**: Complete and ready for demo