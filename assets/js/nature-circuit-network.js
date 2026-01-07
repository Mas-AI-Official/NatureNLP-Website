/**
 * Nature-Circuit Fusion Background
 * Inspired by the fusion of organic leaf veins and circuit board traces
 * Left side: Natural leaf with veins and water droplets
 * Right side: Circuit board with glowing traces and components
 * Central divide: Seamless transition between nature and technology
 */

class NatureCircuitNetwork {
    constructor(canvasId) {
        try {
            this.canvas = document.getElementById(canvasId);
            if (!this.canvas) {
                console.error('NatureCircuitNetwork: Canvas element not found:', canvasId);
                return;
            }
            
            this.ctx = this.canvas.getContext('2d');
            if (!this.ctx) {
                console.error('NatureCircuitNetwork: Could not get 2D context');
                return;
            }
            
            this.time = 0;
            this.animationId = null;
            
            // Leaf structure (left side)
            this.leafVeins = [];
            this.waterDroplets = [];
            
            // Circuit structure (right side)
            this.circuitTraces = [];
            this.circuitNodes = [];
            this.activeTraces = [];
            
            this.setupCanvas();
            this.createLeafStructure();
            this.createCircuitStructure();
            this.createWaterDroplets();
            
            console.log('NatureCircuitNetwork: Structures created');
            console.log('  - Leaf veins:', this.leafVeins.length);
            console.log('  - Circuit traces:', this.circuitTraces.length);
            console.log('  - Circuit nodes:', this.circuitNodes.length);
            console.log('  - Water droplets:', this.waterDroplets.length);
            
            this.animate();
            
            console.log('NatureCircuitNetwork: Animation started successfully');
            
            window.addEventListener('resize', () => {
                this.setupCanvas();
                this.createLeafStructure();
                this.createCircuitStructure();
                this.createWaterDroplets();
            });
        } catch (error) {
            console.error('NatureCircuitNetwork: Error during initialization:', error);
        }
    }
    
    setupCanvas() {
        // Get actual canvas dimensions from CSS
        const rect = this.canvas.getBoundingClientRect();
        const displayWidth = Math.max(rect.width, window.innerWidth);
        const displayHeight = Math.max(rect.height, window.innerHeight);
        
        // Set internal canvas buffer size (must match display size for crisp rendering)
        this.canvas.width = displayWidth;
        this.canvas.height = displayHeight;
        
        // Ensure canvas CSS dimensions match
        this.canvas.style.width = displayWidth + 'px';
        this.canvas.style.height = displayHeight + 'px';
        
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        
        // Ensure canvas is visible
        this.canvas.style.display = 'block';
        this.canvas.style.visibility = 'visible';
        this.canvas.style.opacity = '1';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '-1';
        
        // Verify context is valid
        if (!this.ctx) {
            console.error('Canvas context is null!');
            return;
        }
        
        // Test draw to verify canvas works
        this.ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        console.log(`✅ Canvas setup: ${this.canvas.width}x${this.canvas.height}, center: (${this.centerX}, ${this.centerY})`);
        console.log(`✅ Canvas CSS: ${this.canvas.style.width} x ${this.canvas.style.height}`);
        console.log(`✅ Canvas context valid:`, !!this.ctx);
    }
    
    createLeafStructure() {
        this.leafVeins = [];
        
        // Main central vein (dividing line)
        const veinStartY = this.canvas.height * 0.9;
        const veinEndY = this.canvas.height * 0.1;
        
        // Primary veins branching from center
        const primaryVeins = 5;
        for (let i = 0; i < primaryVeins; i++) {
            const yPos = veinStartY - (i * (veinStartY - veinEndY) / primaryVeins);
            const branchPoint = 0.3 + (i * 0.15); // Position along central vein
            
            // Left side veins (nature)
            const leftAngle = Math.PI + (Math.PI / 6) * (0.5 + Math.random() * 0.5);
            const leftLength = this.canvas.width * (0.15 + Math.random() * 0.1);
            const leftEndX = this.centerX - Math.cos(leftAngle) * leftLength * branchPoint;
            const leftEndY = yPos - Math.sin(leftAngle) * leftLength * branchPoint;
            
            this.leafVeins.push({
                startX: this.centerX,
                startY: yPos,
                endX: leftEndX,
                endY: leftEndY,
                width: 2.5 - i * 0.3,
                type: 'primary',
                side: 'left',
                glow: 0.3 + Math.random() * 0.2
            });
            
            // Secondary veins
            for (let j = 0; j < 2; j++) {
                const secAngle = leftAngle + (Math.random() - 0.5) * Math.PI / 3;
                const secLength = leftLength * (0.4 + Math.random() * 0.3);
                const secStartX = this.centerX + (leftEndX - this.centerX) * (0.3 + j * 0.4);
                const secStartY = yPos + (leftEndY - yPos) * (0.3 + j * 0.4);
                
                this.leafVeins.push({
                    startX: secStartX,
                    startY: secStartY,
                    endX: secStartX - Math.cos(secAngle) * secLength,
                    endY: secStartY - Math.sin(secAngle) * secLength,
                    width: 1.5 - j * 0.3,
                    type: 'secondary',
                    side: 'left',
                    glow: 0.2 + Math.random() * 0.15
                });
            }
        }
    }
    
    createCircuitStructure() {
        this.circuitTraces = [];
        this.circuitNodes = [];
        this.activeTraces = [];
        
        // Circuit traces on right side (mirror of leaf structure but more geometric)
        const traceStartY = this.canvas.height * 0.9;
        const traceEndY = this.canvas.height * 0.1;
        
        const primaryTraces = 5;
        for (let i = 0; i < primaryTraces; i++) {
            const yPos = traceStartY - (i * (traceStartY - traceEndY) / primaryTraces);
            const branchPoint = 0.3 + (i * 0.15);
            
            // Right side traces (circuit)
            const rightAngle = Math.PI / 6 * (0.5 + Math.random() * 0.5);
            const rightLength = this.canvas.width * (0.15 + Math.random() * 0.1);
            const rightEndX = this.centerX + Math.cos(rightAngle) * rightLength * branchPoint;
            const rightEndY = yPos - Math.sin(rightAngle) * rightLength * branchPoint;
            
            // Create circuit node at end
            this.circuitNodes.push({
                x: rightEndX,
                y: rightEndY,
                radius: 3 + Math.random() * 2,
                pulse: Math.random() * Math.PI * 2,
                glow: 0.6 + Math.random() * 0.4
            });
            
            this.circuitTraces.push({
                startX: this.centerX,
                startY: yPos,
                endX: rightEndX,
                endY: rightEndY,
                width: 2 - i * 0.2,
                type: 'primary',
                side: 'right',
                progress: Math.random(),
                speed: 0.01 + Math.random() * 0.02,
                glow: 0.4 + Math.random() * 0.3
            });
            
            // Secondary traces (more geometric)
            for (let j = 0; j < 2; j++) {
                const secAngle = rightAngle + (Math.random() - 0.5) * Math.PI / 4;
                const secLength = rightLength * (0.4 + Math.random() * 0.3);
                const secStartX = this.centerX + (rightEndX - this.centerX) * (0.3 + j * 0.4);
                const secStartY = yPos + (rightEndY - yPos) * (0.3 + j * 0.4);
                
                // Add small circuit nodes
                this.circuitNodes.push({
                    x: secStartX + (rightEndX - secStartX) * 0.5,
                    y: secStartY + (rightEndY - secStartY) * 0.5,
                    radius: 2 + Math.random() * 1.5,
                    pulse: Math.random() * Math.PI * 2,
                    glow: 0.4 + Math.random() * 0.3
                });
                
                this.circuitTraces.push({
                    startX: secStartX,
                    startY: secStartY,
                    endX: secStartX + Math.cos(secAngle) * secLength,
                    endY: secStartY + Math.sin(secAngle) * secLength,
                    width: 1.2 - j * 0.2,
                    type: 'secondary',
                    side: 'right',
                    progress: Math.random(),
                    speed: 0.008 + Math.random() * 0.015,
                    glow: 0.3 + Math.random() * 0.2
                });
            }
        }
        
        // Create active trace animations
        this.circuitTraces.forEach((trace, index) => {
            if (Math.random() > 0.3) {
                this.activeTraces.push({
                    traceIndex: index,
                    position: Math.random(),
                    speed: trace.speed,
                    intensity: 0.7 + Math.random() * 0.3
                });
            }
        });
    }
    
    createWaterDroplets() {
        this.waterDroplets = [];
        
        // Add water droplets on left side (leaf)
        for (let i = 0; i < 25; i++) {
            const x = this.canvas.width * (0.1 + Math.random() * 0.4); // Left side
            const y = this.canvas.height * (0.2 + Math.random() * 0.6);
            
            this.waterDroplets.push({
                x: x,
                y: y,
                size: 2 + Math.random() * 4,
                opacity: 0.6 + Math.random() * 0.4,
                sparkle: Math.random() * Math.PI * 2,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }
    
    drawCentralVein() {
        const ctx = this.ctx;
        const startY = this.canvas.height * 0.9;
        const endY = this.canvas.height * 0.1;
        
        // Central dividing line - transitions from organic to geometric
        const gradient = ctx.createLinearGradient(
            this.centerX, startY,
            this.centerX, endY
        );
        
        // Left side (nature) - softer, organic - INCREASED VISIBILITY
        gradient.addColorStop(0, 'rgba(76, 175, 80, 0.7)');
        gradient.addColorStop(0.3, 'rgba(76, 175, 80, 0.8)');
        gradient.addColorStop(0.5, 'rgba(102, 187, 106, 0.9)'); // Transition point
        gradient.addColorStop(0.7, 'rgba(139, 195, 74, 0.8)');
        gradient.addColorStop(1, 'rgba(139, 195, 74, 0.7)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(76, 175, 80, 0.8)';
        
        ctx.beginPath();
        ctx.moveTo(this.centerX, startY);
        ctx.lineTo(this.centerX, endY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
    }
    
    drawLeafVein(vein) {
        const ctx = this.ctx;
        
        // Organic, flowing style for leaf veins - INCREASED VISIBILITY
        ctx.strokeStyle = `rgba(76, 175, 80, ${vein.glow * 0.6})`;
        ctx.lineWidth = vein.width * 1.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(76, 175, 80, 0.5)';
        
        ctx.beginPath();
        ctx.moveTo(vein.startX, vein.startY);
        ctx.lineTo(vein.endX, vein.endY);
        ctx.stroke();
        
        // Enhanced glow
        ctx.strokeStyle = `rgba(139, 195, 74, ${vein.glow * 0.3})`;
        ctx.lineWidth = vein.width * 2.5;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
    }
    
    drawCircuitTrace(trace) {
        const ctx = this.ctx;
        
        // Geometric, precise style for circuit traces
        const dx = trace.endX - trace.startX;
        const dy = trace.endY - trace.startY;
        const length = Math.sqrt(dx * dx + dy * dy);
        
        // Draw base trace - INCREASED VISIBILITY
        ctx.strokeStyle = `rgba(76, 175, 80, ${trace.glow * 0.5})`;
        ctx.lineWidth = trace.width * 1.3;
        ctx.lineCap = 'square';
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(76, 175, 80, 0.4)';
        
        ctx.beginPath();
        ctx.moveTo(trace.startX, trace.startY);
        ctx.lineTo(trace.endX, trace.endY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
        
        // Draw active energy flow
        this.activeTraces.forEach(active => {
            if (active.traceIndex === this.circuitTraces.indexOf(trace)) {
                const x = trace.startX + dx * active.position;
                const y = trace.startY + dy * active.position;
                
                // Glowing particle
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
                gradient.addColorStop(0, `rgba(255, 215, 0, ${active.intensity})`);
                gradient.addColorStop(0.5, `rgba(255, 193, 7, ${active.intensity * 0.6})`);
                gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.fill();
                
                // Update position
                active.position += active.speed;
                if (active.position > 1) {
                    active.position = 0;
                }
            }
        });
    }
    
    drawCircuitNode(node) {
        const ctx = this.ctx;
        const pulse = Math.sin(this.time * 0.005 + node.pulse) * 0.3 + 0.7;
        
        // Outer glow (golden-yellow)
        const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius * 6
        );
        glowGradient.addColorStop(0, `rgba(255, 215, 0, ${pulse * node.glow * 0.7})`);
        glowGradient.addColorStop(0.5, `rgba(255, 193, 7, ${pulse * node.glow * 0.4})`);
        glowGradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Circuit pad (square) - INCREASED VISIBILITY
        ctx.fillStyle = `rgba(76, 175, 80, ${pulse * 0.7})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
        ctx.fillRect(
            node.x - node.radius,
            node.y - node.radius,
            node.radius * 2,
            node.radius * 2
        );
        
        // Inner dot
        ctx.fillStyle = `rgba(255, 215, 0, ${pulse * 0.9})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
    }
    
    drawWaterDroplet(droplet) {
        const ctx = this.ctx;
        const sparkle = Math.sin(this.time * 0.01 + droplet.sparkle) * 0.3 + 0.7;
        const pulse = Math.sin(this.time * 0.008 + droplet.pulse) * 0.2 + 0.8;
        
        // Water droplet with sparkle
        const gradient = ctx.createRadialGradient(
            droplet.x, droplet.y, 0,
            droplet.x, droplet.y, droplet.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${droplet.opacity * sparkle * 0.8})`);
        gradient.addColorStop(0.3, `rgba(200, 255, 200, ${droplet.opacity * sparkle * 0.4})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        
        ctx.beginPath();
        ctx.arc(droplet.x, droplet.y, droplet.size * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${droplet.opacity * sparkle * 0.6})`;
        ctx.beginPath();
        ctx.arc(droplet.x - droplet.size * 0.3, droplet.y - droplet.size * 0.3, droplet.size * 0.3 * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
    }
    
    drawLightSource() {
        const ctx = this.ctx;
        
        // Golden-yellow light source (top left, like sunlight)
        const lightX = this.canvas.width * 0.15;
        const lightY = this.canvas.height * 0.2;
        
        const lightGradient = ctx.createRadialGradient(
            lightX, lightY, 0,
            lightX, lightY, this.canvas.width * 0.4
        );
        lightGradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)');
        lightGradient.addColorStop(0.3, 'rgba(255, 193, 7, 0.15)');
        lightGradient.addColorStop(0.6, 'rgba(255, 215, 0, 0.06)');
        lightGradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        
        ctx.fillStyle = lightGradient;
        ctx.beginPath();
        ctx.arc(lightX, lightY, this.canvas.width * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        // Lens flare effect
        const flareGradient = ctx.createRadialGradient(
            lightX, lightY, 0,
            lightX, lightY, 30
        );
        flareGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        flareGradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.3)');
        flareGradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        
        ctx.fillStyle = flareGradient;
        ctx.beginPath();
        ctx.arc(lightX, lightY, 30, 0, Math.PI * 2);
        ctx.fill();
    }
    
    animate() {
        if (!this.ctx || !this.canvas) {
            console.error('NatureCircuitNetwork: Cannot animate - canvas or context missing');
            return;
        }
        
        try {
            // Clear canvas completely first
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Verify canvas dimensions are valid
            if (this.canvas.width === 0 || this.canvas.height === 0) {
                console.warn('Canvas dimensions are zero, resetting...');
                this.setupCanvas();
                return;
            }
            
            this.time += 1;
            
            // Draw light source (sunlight on leaf)
            this.drawLightSource();
            
            // Draw central dividing vein/trace
            this.drawCentralVein();
            
            // Draw leaf veins (left side)
            this.leafVeins.forEach(vein => {
                this.drawLeafVein(vein);
            });
            
            // Draw circuit traces (right side)
            this.circuitTraces.forEach(trace => {
                this.drawCircuitTrace(trace);
            });
            
            // Draw circuit nodes
            this.circuitNodes.forEach(node => {
                this.drawCircuitNode(node);
            });
            
            // Draw water droplets
            this.waterDroplets.forEach(droplet => {
                this.drawWaterDroplet(droplet);
            });
            
            // Log first frame to confirm drawing
            if (this.time === 1) {
                console.log('✅ First frame drawn - background should be visible now');
                console.log('✅ Canvas is drawing:', this.canvas.width, 'x', this.canvas.height);
            }
            
            this.animationId = requestAnimationFrame(() => this.animate());
        } catch (error) {
            console.error('NatureCircuitNetwork: Error in animate loop:', error);
            console.error('Error details:', error.message, error.stack);
        }
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize when DOM is ready - multiple strategies
(function() {
    console.log('🌿 Nature-Circuit script loaded, readyState:', document.readyState);
    
    let initAttempts = 0;
    const maxAttempts = 10;
    
    function initNatureCircuit() {
        initAttempts++;
        console.log(`🌿 Attempting to initialize Nature-Circuit Background (attempt ${initAttempts})...`);
        const canvas = document.getElementById('nature-hex-canvas');
        
        if (canvas) {
            console.log('✅ Canvas element found:', canvas);
            console.log('✅ Canvas offset dimensions:', canvas.offsetWidth, 'x', canvas.offsetHeight);
            console.log('✅ Canvas client dimensions:', canvas.clientWidth, 'x', canvas.clientHeight);
            console.log('✅ Canvas getBoundingClientRect:', canvas.getBoundingClientRect());
            
            // Verify canvas is in DOM and visible
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
                console.warn('⚠️ Canvas has zero dimensions, waiting...');
                if (initAttempts < maxAttempts) {
                    setTimeout(initNatureCircuit, 200);
                }
                return;
            }
            
            try {
                window.natureCircuitNetwork = new NatureCircuitNetwork('nature-hex-canvas');
                if (window.natureCircuitNetwork && window.natureCircuitNetwork.canvas && window.natureCircuitNetwork.ctx) {
                    console.log('✅ Nature-Circuit Background initialized successfully');
                    console.log('✅ Canvas internal size:', window.natureCircuitNetwork.canvas.width, 'x', window.natureCircuitNetwork.canvas.height);
                    console.log('✅ Animation should be running now');
                    
                    // Verify drawing is working by checking after a short delay
                    setTimeout(() => {
                        const testImageData = window.natureCircuitNetwork.ctx.getImageData(
                            window.natureCircuitNetwork.centerX - 10,
                            window.natureCircuitNetwork.centerY - 10,
                            20, 20
                        );
                        const hasContent = testImageData.data.some((val, idx) => idx % 4 !== 3 && val > 0);
                        if (hasContent) {
                            console.log('✅ Canvas is drawing content - background is visible!');
                        } else {
                            console.warn('⚠️ Canvas may not be drawing - check drawing functions');
                        }
                    }, 500);
                } else {
                    console.error('❌ Nature-Circuit Background failed to initialize - no canvas or context in instance');
                    if (initAttempts < maxAttempts) {
                        setTimeout(initNatureCircuit, 200);
                    }
                }
            } catch (error) {
                console.error('❌ Error initializing Nature-Circuit Background:', error);
                console.error('❌ Error stack:', error.stack);
                if (initAttempts < maxAttempts) {
                    setTimeout(initNatureCircuit, 200);
                }
            }
        } else {
            console.warn('⚠️ Canvas element not found (id: nature-hex-canvas), retrying...');
            if (initAttempts < maxAttempts) {
                setTimeout(initNatureCircuit, 100);
            } else {
                console.error('❌ Failed to find canvas after', maxAttempts, 'attempts');
            }
        }
    }
    
    // Try multiple initialization strategies
    if (document.readyState === 'loading') {
        console.log('📄 DOM is loading, waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', () => {
            console.log('📄 DOMContentLoaded fired, initializing...');
            setTimeout(initNatureCircuit, 50);
        });
    } else if (document.readyState === 'interactive') {
        console.log('📄 DOM is interactive, initializing...');
        setTimeout(initNatureCircuit, 50);
    } else {
        console.log('📄 DOM is complete, initializing immediately...');
        setTimeout(initNatureCircuit, 50);
    }
    
    // Fallback: also try on window load
    window.addEventListener('load', () => {
        console.log('📄 Window load event fired');
        if (!window.natureCircuitNetwork || !window.natureCircuitNetwork.canvas) {
            console.log('📄 Background not initialized yet, trying again...');
            setTimeout(initNatureCircuit, 100);
        }
    });
})();
