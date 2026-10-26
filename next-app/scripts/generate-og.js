const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function generateOG() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2, // 2x for ultra-sharp high-DPI rendering
  });

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      width: 1200px;
      height: 630px;
      background-color: #FAF9F6;
      font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1A1C19;
      display: flex;
      position: relative;
      overflow: hidden;
      padding: 48px 56px;
    }
    /* Subtle background grid */
    .bg-grid {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(231, 229, 222, 0.45) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(231, 229, 222, 0.45) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
    }
    /* Ambient glow */
    .ambient-glow {
      position: absolute;
      top: -150px;
      right: -100px;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(161, 225, 190, 0.25) 0%, rgba(250, 249, 246, 0) 70%);
      pointer-events: none;
    }
    .container {
      position: relative;
      z-index: 10;
      display: flex;
      width: 100%;
      height: 100%;
      gap: 40px;
      align-items: center;
    }
    .left-col {
      flex: 1.15;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    .brand-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .logo-box {
      width: 40px;
      height: 40px;
      border-radius: 9px;
      background: #28664A;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(40, 102, 74, 0.25);
    }
    .brand-name {
      font-size: 21px;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #1A1C19;
    }
    .brand-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: #E8ECE6;
      color: #28664A;
      padding: 4px 8px;
      border-radius: 5px;
      border: 1px solid rgba(40, 102, 74, 0.15);
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 10px;
    }
    .title {
      font-size: 44px;
      font-weight: 600;
      line-height: 1.14;
      letter-spacing: -0.035em;
      color: #1A1C19;
    }
    .title-highlight {
      color: #074E34;
    }
    .subtitle {
      font-size: 18px;
      line-height: 1.5;
      color: #566155;
      max-width: 540px;
    }
    .badges-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 7px;
      background: #FFFFFF;
      border: 1px solid #E2E1DA;
      color: #38423B;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    }
    .chip-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #28664A;
    }
    .chip-accent {
      background: #F0F6F2;
      border-color: #A1E1BE;
      color: #074E34;
      font-weight: 600;
    }

    /* Right column: UI Workbench snippet */
    .right-col {
      flex: 0.95;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .preview-card {
      width: 100%;
      background: #FFFFFF;
      border-radius: 14px;
      border: 1px solid #E2E1DA;
      box-shadow: 0 14px 34px -8px rgba(26, 28, 25, 0.12), 0 2px 6px rgba(26, 28, 25, 0.04);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .card-topbar {
      padding: 12px 16px;
      background: #F9F9F7;
      border-bottom: 1px solid #ECEBE5;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-meta {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 500;
      color: #6A736B;
    }
    .verified-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: #074E34;
      background: #E4F3EB;
      border: 1px solid #A1E1BE;
      padding: 3px 8px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .card-body {
      padding: 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .q-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #707972;
    }
    .q-text {
      font-size: 14px;
      font-weight: 600;
      color: #1A1C19;
      line-height: 1.35;
    }
    .answer-box {
      background: #F9F9F7;
      border-radius: 8px;
      padding: 12px 14px;
      border-left: 3px solid #28664A;
    }
    .answer-text {
      font-size: 13px;
      line-height: 1.45;
      color: #2F3530;
    }
    .citation-box {
      background: #F4F8F5;
      border: 1px solid #D1E7DB;
      border-radius: 8px;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .citation-header {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: #074E34;
    }
    .citation-quote {
      font-size: 12px;
      color: #495C51;
      font-style: italic;
      line-height: 1.4;
    }
    .card-footer {
      padding: 10px 16px;
      background: #FDFCFA;
      border-top: 1px solid #ECEBE5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
    .human-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #28664A;
      font-weight: 600;
      font-size: 12px;
    }
    .engine-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      color: #8C948D;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="ambient-glow"></div>
  <div class="container">
    <div class="left-col">
      <div class="brand-row">
        <div class="logo-box">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16 5.5L8 9V16C8 21.2 11.4 25.8 16 27C20.6 25.8 24 21.2 24 16V9L16 5.5Z" fill="#1B4D36" stroke="#A1E1BE" stroke-width="1.4" stroke-linejoin="round" />
            <path d="M12.5 16L15 18.5L19.5 13.5" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <span class="brand-name">Security Review Ready</span>
        <span class="brand-badge">B2B SaaS</span>
      </div>

      <div class="hero-content">
        <h1 class="title">Security questionnaires shouldn&apos;t slow down a deal.</h1>
        <p class="subtitle">
          Feed in your security docs once. Continuous parallel questionnaire filling with 100% cited source evidence and zero hallucinations.
        </p>
      </div>

      <div class="badges-row">
        <div class="chip chip-accent">
          <span class="chip-dot" style="background:#074E34;"></span>
          100% Cited Sources
        </div>
        <div class="chip">
          <span class="chip-dot"></span>
          SOC 2 Type II
        </div>
        <div class="chip">
          <span class="chip-dot"></span>
          CAIQ v4
        </div>
        <div class="chip">
          <span class="chip-dot"></span>
          SIG Core
        </div>
        <div class="chip">
          <span class="chip-dot"></span>
          Trust Center Sync
        </div>
      </div>
    </div>

    <div class="right-col">
      <div class="preview-card">
        <div class="card-topbar">
          <span class="card-meta">QUEUE #12 • ENTERPRISE CAIQ</span>
          <span class="verified-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            100% Grounded
          </span>
        </div>
        <div class="card-body">
          <div>
            <div class="q-label">Question 14 of 95</div>
            <div class="q-text">Are production databases encrypted at rest using AES-256 with KMS key rotation?</div>
          </div>
          <div class="answer-box">
            <div class="answer-text">
              Yes. All customer data volumes, snapshots, and production RDS datastores enforce AES-256 encryption at rest with annual key rotation.
            </div>
          </div>
          <div class="citation-box">
            <div class="citation-header">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              SOC2_TypeII_Audit.pdf §4.3 (p. 28)
            </div>
            <div class="citation-quote">
              &ldquo;Auditor tested AWS KMS configuration and verified AES-256 encryption active across all customer tables.&rdquo;
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="human-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Human-in-the-Loop Approved
          </div>
          <span class="engine-tag">Grounded Citation Engine</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

  await page.setContent(htmlContent, { waitUntil: 'networkidle' });
  
  // Wait for Google Fonts to load
  await page.evaluate(() => document.fonts.ready);
  // Short pause to guarantee font rasterization
  await new Promise(resolve => setTimeout(resolve, 800));

  const outPublic = path.resolve(__dirname, '../public/og-image.png');
  const outAppOG = path.resolve(__dirname, '../src/app/opengraph-image.png');
  const outAppTwitter = path.resolve(__dirname, '../src/app/twitter-image.png');

  await page.screenshot({ path: outPublic, type: 'png' });
  console.log(`Generated: ${outPublic}`);

  // Copy to src/app for Next.js App Router automated convention support
  fs.copyFileSync(outPublic, outAppOG);
  console.log(`Copied to: ${outAppOG}`);
  fs.copyFileSync(outPublic, outAppTwitter);
  console.log(`Copied to: ${outAppTwitter}`);

  await browser.close();
}

generateOG().catch((err) => {
  console.error(err);
  process.exit(1);
});
